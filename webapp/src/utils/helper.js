/**
 * Function to parse the energyUsageData
 * @param {energyUsageData} data
 */
export default function getEnergyUsageData(data) {
  const energyUsageData = [];
  for (let i = 0; i < data.length - 2; i++) {
    const energyUsage = data[i + 1].cumulative - data[i].cumulative;
    energyUsageData.push({
      date: data[i + 1].readingDate,
      energyUsage
    });
  }

  return energyUsageData;
}
