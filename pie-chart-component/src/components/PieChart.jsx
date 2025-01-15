import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';

const PieChart = ({
    data = [{label: 'a', value:10},{label: 'b', value:5},{label: 'c', value:30}],
    width = 800,
    height = 700,
  }) => {

    const ref = useRef(null);

    useEffect(() => {
        const svg = d3.select(ref.current);
        svg.selectAll('*').remove();

        const radius = Math.min(width, height) / 2 ;

        const color = d3.scaleOrdinal(d3.schemeObservable10);

        const pie = d3.pie().value(e=>e.value);

        const arc = d3.arc()
        .innerRadius(radius/2)
        .outerRadius(radius);

        const arcs = pie(data);

        svg.selectAll()
        .data(arcs)
        .enter()
        .append('path')
        .attr('fill', (_, i) => color(i))
        .attr('d', arc);

        svg.selectAll()
        .data(arcs)
        .enter()
        .append('text')
        .attr('text-anchor','middle')
        .attr('alignment-baseline','middle')
        .text((d) => `${d.data.label} : ${d.data.value}`)
        .style('fill', '#ffffff')
        .attr('transform', (d) => {
          const [x, y] = arc.centroid(d);
          return `translate(${x}, ${y})`;
        });

        
    }, [data, width, height]);

    
    return (
        <svg width={width} height={height} ref={ref} viewBox={[-width/2, -height/2, width, height]}/>
    )
}

export default PieChart