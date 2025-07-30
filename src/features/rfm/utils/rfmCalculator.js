export function calculateRFMScores(customers) {
  const sortedByRecency = [...customers].sort((a, b) => a.recency - b.recency);
  const sortedByFrequency = [...customers].sort((a, b) => b.frequency - a.frequency);
  const sortedByMonetary = [...customers].sort((a, b) => b.monetary - a.monetary);

  const customersWithScores = customers.map(customer => {
    const recencyRank = sortedByRecency.findIndex(c => c.id === customer.id) + 1;
    const frequencyRank = sortedByFrequency.findIndex(c => c.id === customer.id) + 1;
    const monetaryRank = sortedByMonetary.findIndex(c => c.id === customer.id) + 1;

    const recencyScore = Math.ceil((recencyRank / customers.length) * 5);
    const frequencyScore = Math.ceil((frequencyRank / customers.length) * 5);
    const monetaryScore = Math.ceil((monetaryRank / customers.length) * 5);

    return {
      ...customer,
      recencyScore,
      frequencyScore,
      monetaryScore,
      x: frequencyScore,
      y: monetaryScore
    };
  });

  return customersWithScores;
} 