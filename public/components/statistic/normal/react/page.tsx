import React from 'react';
import { Statistic } from 'styles/components/ui/statistic';
import { Button } from 'styles/components/ui/button';

function StatisticNormal() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Statistic title="Active Users" value={112893} />
        <div style={{ width: '130px' }} />
        <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
      </div>
      <div style={{ height: '70px' }} />
      <Statistic title="Active Users" value={112893} loading />
      <div style={{ marginTop: '-90px', marginLeft: '220px', fontFamily: 'Arial, sans-serif', fontSize: '16px' }}>
        <Button>Recharge</Button>
      </div>
    </div>
  );
}

export default StatisticNormal;

