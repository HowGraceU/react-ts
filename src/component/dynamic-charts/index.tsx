import React, { useState, useEffect } from 'react';
import { Progress } from 'antd';

import { getRandomColor, translateY } from './util';
import styles from './index.css';

type ChartData = {
  id: number
  label: string
  value: number
  color: string
}

function initDatas(labels: string[]): ChartData[] {
  return labels.map<ChartData>((label, index) => ({
    id: index,
    label,
    value: 0,
    color: getRandomColor(),
  }));
}

function zero2thousand(): number {
  return Math.floor(Math.random() * 1000);
}

function generateData(datas: ChartData[] = initDatas(['huawei', 'xiaomi', 'oppo', 'vivo', '1Plus'])): ChartData[] {
  const ret: ChartData[] = datas.map<ChartData>((data) => ({ ...data, value: data.value + zero2thousand() }));

  return ret;
}

export default function () {
  const [data, setData] = useState<ChartData[]>(generateData());

  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      setData(generateData(data));
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });

  const dataSort: ChartData[] = [...data].sort((a, b) => b.value - a.value);
  const maxValue: number = dataSort[0].value;

  type DataIndex = {
    [key: string]: number
  }

  const dataIndex: DataIndex = Object.fromEntries(dataSort.map(({ label }, index) => ([label, index])));

  return (
    <>
      {data.map(({
        label, value, color, id,
      }) => {
        const diff: number = dataIndex[label] - id;

        return (
          <div className={styles.transition} style={{ transform: translateY(diff * 21) }} key={label}>
            <span className={styles.chartLabel}>{label}</span>
            <Progress className={styles.chartProgress} percent={(value * 100) / maxValue} showInfo={false} strokeColor={color} />
            <span>{value}</span>
          </div>
        );
      })}
    </>
  );
}
