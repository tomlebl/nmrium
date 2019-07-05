import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';
import reduce from '../util/reduce';

const Lines = ({ width, height, margin, data, xDomain,yDomain }) => {
  const refPathsContainer = useRef();
  // const [_data,setData]=useState(data);

  function makePath(data) {
    const scale = getScale(xDomain,yDomain);
    const pathPoints = reduce(data.x, data.y, {
      from: xDomain[0],
      to: xDomain[1],
    });

    let path = `M ${scale.x(pathPoints.x[0])} ${scale.y(pathPoints.y[0])}`;
    path += pathPoints.x.slice(1).map((point, i) => {
      return ` L ${scale.x(point)} ${scale.y(pathPoints.y[i])}`;
    });

    return path;
  }

  function getScale(xDomain,yDomain) {
    const x = d3.scaleLinear(xDomain, [width - margin.right,margin.left]);
    const y = d3.scaleLinear([0,yDomain[1]], [height - margin.bottom, margin.top]);
    return { x, y };
  }

  function generatePaths() {

    return data.map((d, i) => {
      return (
        <path className="line" key={d.id} stroke={d.color} d={makePath(d)} />
      );
    });
  }



  return (
    <g>
      <defs>
        <clipPath id="clip">
          <rect
            width={`${width - margin.left - margin.right}`}
            height={`${height - margin.top - margin.bottom}`}
            x={`${margin.left}`}
            y={`${margin.top}`}
          />
        </clipPath>
      </defs>

      <g className="paths" ref={refPathsContainer} clipPath="url(#clip)">
        {generatePaths()}
      </g>
    </g>
  );
};

export default Lines;

Lines.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  data: PropTypes.array.isRequired,
  margin: PropTypes.shape({
    top: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }),
  xDomain:PropTypes.array.isRequired,
  yDomain:PropTypes.array.isRequired
  // domain: PropTypes.shape({
  //   x: PropTypes.array.isRequired,
  //   y: PropTypes.array.isRequired,
  // }),
};

Lines.defaultProps = {
  width: 800,
  height: 800,
  data: [],
  margin: { top: 40, right: 40, bottom: 40, left: 40 },
  // domain: { x: 0, y: 0 },
  xDomain:[],
  yDomain:[]
};
