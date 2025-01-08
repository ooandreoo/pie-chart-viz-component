import * as d3 from "d3";
import React, { useRef, useEffect } from 'react';

const PieChart = ({
    data = [100,200,300,20],
    width = 800,
    height = 700,
  }) => {

    const ref = useRef(null);

    useEffect(() => {
        const svg = d3.select(ref.current);
        svg.selectAll('*').remove();

        const radius = Math.min(width, height) / 2 ;

        const color = d3.scaleOrdinal(d3.schemeObservable10);

        const pie = d3.pie();

        const arc = d3.arc()
        .innerRadius(radius/2)
        .outerRadius(radius);

        const arcs = pie(data);

        svg.selectAll('path')
        .data(arcs)
        .enter()
        .append('path')
        .attr('fill', (_, i) => color(i))
        .attr('d', arc);
    }, [data, width, height]);

    
    return (
        <svg width={width} height={height} ref={ref} viewBox={[-width/2, -height/2, width, height]}/>
    )
}

export default PieChart