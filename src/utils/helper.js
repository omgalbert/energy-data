import moment from "moment";

/**
 * Function to parse the energyUsageData
 * @param {energyUsageData} data
 */
export function getEnergyUsageData(data) {
  const energyUsageData = [];

  // To avoid the edges we start by the second object in the array
  for (let i = 1; i < data.length - 2; i++) {
    const prevReading = data[i - 1];
    const reading = data[i];
    const nextReading = data[i + 1];

    // Get the number of days from the readingDate for start and end of month
    const daysUntilReadingDate = parseFloat(
      moment(reading.readingDate).format("D")
    );
    const daysUntilMonthEnd = getDaysUntilMonthEnd(reading.readingDate);

    //
    // Calculate the energy usage. I have added an alternative way to get it, not using the estimated reading.
    //

    //  Based on the estimated end of month meter readings
    const energyUsage =
      getEnergyUsageAverage(nextReading, reading, daysUntilMonthEnd) +
      reading.cumulative -
      (reading.cumulative -
        getEnergyUsageAverage(reading, prevReading, daysUntilReadingDate));

    // Based on the energy usage averages
    const energyUsageAlernative =
      getEnergyUsageAverage(reading, prevReading, daysUntilReadingDate) +
      getEnergyUsageAverage(nextReading, reading, daysUntilMonthEnd);

    console.log("energyUsage", energyUsage);
    console.log("energyUsageAlernative", energyUsageAlernative);

    energyUsageData.push({
      date: moment(reading.readingDate).format("MMMM"),
      energyUsage: energyUsage
    });
  }

  return energyUsageData;
}

function getEnergyUsageAverage(reading1, reading2, days) {
  return (
    ((reading1.cumulative - reading2.cumulative) /
      getDiffInDays(
        moment(reading1.readingDate),
        moment(reading2.readingDate)
      )) *
    days
  );
}

/**
 * Check whether a moment object is the end of the month.
 * Ignore the time part.
 * @param {moment} mmt
 */
export function isEndOfMonth(mmt) {
  // startOf allows to ignore the time component
  // we call moment(mmt) because startOf and endOf mutate the momentj object.
  return moment
    .utc(mmt)
    .startOf("day")
    .isSame(
      moment
        .utc(mmt)
        .endOf("month")
        .startOf("day")
    );
}

/**
 * Returns the difference between two moment objects in number of days.
 * @param {moment} mmt1
 * @param {moment} mm2
 */
export function getDiffInDays(mmt1, mm2) {
  return mmt1.diff(mm2, "days");
}

/**
 * Return the number of days between the given moment object
 * and the end of the month of this moment object.
 * @param {moment} mmt
 */
export function getDaysUntilMonthEnd(mmt) {
  return getDiffInDays(moment.utc(mmt).endOf("month"), mmt);
}
