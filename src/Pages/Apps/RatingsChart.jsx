import React from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const RatingsChart = ({ ratings }) => {

  const ratingData = ratings.map(rating => {
    let numeric = parseFloat(rating.count);

    if (rating.count.includes('K')) numeric *= 1000;
    if (rating.count.includes('M')) numeric *= 1000000;
    if (rating.count.includes('B')) numeric *= 1000000000;

    return {
      name: rating.name,
      count: rating.count,
      numeric
    };
  }).reverse();

  return (
    <div className='my-6'>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart layout="vertical" data={ratingData}>
          <YAxis
            dataKey="name"
            type="category"
            axisLine={false}
            tickLine={false}
          />

          <XAxis
            type="number"
            axisLine={false}
            tickLine={false}
          />
          
          <Bar
            dataKey="numeric"
            fill="#FF8811"
            barSize={30}>
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingsChart;