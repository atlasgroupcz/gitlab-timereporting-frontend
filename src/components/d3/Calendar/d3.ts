//@ts-nocheck
import * as d3base from 'd3';
import * as d3array from 'd3-array';
import { IUserCalendarEntry } from '../../../types/IUserCalendarEntry';
const d3 = { ...d3base, ...d3array };

export const chart = (
    svgRef: SVGSVGElement,
    serializedData: IUserCalendarEntry[]
) => {
    const data = serializedData.map(({ date, ...rest }) => ({
        date: new Date(date),
        ...rest,
    }));

    const weekday = 'monday';
    const width = 974;
    const cellSize = 17;
    const height = cellSize * (weekday === 'weekday' ? 7 : 9);
    const countDay =
        weekday === 'sunday'
            ? (d) => d.getUTCDay()
            : (d) => (d.getUTCDay() + 6) % 7;

    const years = d3.groups(data, (d) => d.date.getUTCFullYear()).reverse();
    const formatDay = (d) => 'SMTWTFS'[d.getUTCDay()];
    const timeWeek = weekday === 'sunday' ? d3.utcSunday : d3.utcMonday;
    const formatDate = d3.utcFormat('%x');
    const color = d3
        .scaleLinear()
        .range(['#f0feff', '#1990EA'])
        .domain([0, 1000]);
    const pathMonth = (t) => {
        const n = weekday === 'weekday' ? 5 : 7;
        const d = Math.max(0, Math.min(n, countDay(t)));
        const w = timeWeek.count(d3.utcYear(t), t);
        return `${
            d === 0
                ? `M${w * cellSize},0`
                : d === n
                ? `M${(w + 1) * cellSize},0`
                : `M${(w + 1) * cellSize},0V${d * cellSize}H${w * cellSize}`
        }V${n * cellSize}`;
    };
    const formatMonth = d3.utcFormat('%b');

    const svg = d3
        .select(svgRef)
        .attr('viewBox', [0, 0, width, height * years.length])
        .attr('font-family', 'sans-serif')
        .attr('font-size', 10);

    const year = svg
        .selectAll('g')
        .data(years)
        .join('g')
        .attr(
            'transform',
            (d, i) => `translate(40.5,${height * i + cellSize * 1.5})`
        );

    year.append('text')
        .attr('x', -5)
        .attr('y', -5)
        .attr('font-weight', 'bold')
        .attr('text-anchor', 'end')
        .text(([key]) => key);

    year.append('g')
        .attr('text-anchor', 'end')
        .selectAll('text')
        .data(
            (weekday === 'weekday' ? d3.range(2, 7) : d3.range(7)).map(
                (i) => new Date(1995, 0, i)
            )
        )
        .join('text')
        .attr('x', -5)
        .attr('y', (d) => (countDay(d) + 0.5) * cellSize)
        .attr('dy', '0.31em')
        .text(formatDay);

    year.append('g')
        .selectAll('rect')
        .data(
            weekday === 'weekday'
                ? ([, values]) =>
                      values.filter((d) => ![0, 6].includes(d.date.getUTCDay()))
                : ([, values]) => values
        )
        .join('rect')
        .attr('width', cellSize - 1)
        .attr('height', cellSize - 1)
        .attr(
            'x',
            (d) => timeWeek.count(d3.utcYear(d.date), d.date) * cellSize + 0.5
        )
        .attr('y', (d) => countDay(d.date) * cellSize + 0.5)
        .attr('fill', (d) => color(d.minutes))
        .append('title')
        .text(
            (d) => `${formatDate(d.date)}
${d.minutes} minutes
${d.time}
`
        );

    const month = year
        .append('g')
        .selectAll('g')
        .data(([, values]) =>
            d3.utcMonths(
                d3.utcMonth(values[0].date),
                values[values.length - 1].date
            )
        )
        .join('g');

    month
        .filter((d, i) => i)
        .append('path')
        .attr('fill', 'none')
        .attr('stroke', '#fff')
        .attr('stroke-width', 3)
        .attr('d', pathMonth);

    month
        .append('text')
        .attr(
            'x',
            (d) =>
                timeWeek.count(d3.utcYear(d), timeWeek.ceil(d)) * cellSize + 2
        )
        .attr('y', -5)
        .text(formatMonth);
};
