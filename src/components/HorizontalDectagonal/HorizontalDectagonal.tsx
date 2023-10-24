import React from 'react';
import { View } from 'react-native';
import Svg, { Line, Polygon } from 'react-native-svg';

const HorizontalLineWithDecagon = ({ lineLength, lineWidth, lineColor, decagonSize, decagonColor }:any) => {
  const lineY = 50; 
  const lineX1 = 20;
  const lineX2 = lineX1 + lineLength;

  const decagonPoints = [
    `${lineX1 + lineLength / 2},${lineY - decagonSize}`,
    `${lineX1 + lineLength / 2 - 0.5 * decagonSize},${lineY - 0.8 * decagonSize}`,
    `${lineX1 + lineLength / 2 - decagonSize},${lineY - 0.4 * decagonSize}`,
    `${lineX1 + lineLength / 2 - decagonSize},${lineY + 0.4 * decagonSize}`,
    `${lineX1 + lineLength / 2 - 0.5 * decagonSize},${lineY + 0.8 * decagonSize}`,
    `${lineX1 + lineLength / 2},${lineY + decagonSize}`,
    `${lineX1 + lineLength / 2 + 0.5 * decagonSize},${lineY + 0.8 * decagonSize}`,
    `${lineX1 + lineLength / 2 + decagonSize},${lineY + 0.4 * decagonSize}`,
    `${lineX1 + lineLength / 2 + decagonSize},${lineY - 0.4 * decagonSize}`,
    `${lineX1 + lineLength / 2 + 0.5 * decagonSize},${lineY - 0.8 * decagonSize}`,
  ].join(' ');

  return (
    <View>
      <Svg height={100} width={lineX2 + 20}>
        <Line x1={lineX1} y1={lineY} x2={lineX2} y2={lineY} stroke={lineColor} strokeWidth={lineWidth} />
        <Polygon points={decagonPoints} fill={decagonColor} />
      </Svg>
    </View>
  );
};

export default HorizontalLineWithDecagon;
