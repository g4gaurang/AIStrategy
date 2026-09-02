import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts'

type ChartItem = {
  dimension: string
  value: number
}

export default function PortfolioChart({ data }: { data: ChartItem[] }) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <RadarChart data={data} cx="50%" cy="52%" outerRadius="58%" margin={{ top: 16, right: 28, bottom: 16, left: 28 }}>
        <PolarGrid stroke="#d5deea" />
        <PolarAngleAxis dataKey="dimension" tick={{ fill: '#40516b', fontSize: 11 }} />
        <PolarRadiusAxis domain={[0, 4]} tick={false} axisLine={false} />
        <Radar
          name="Qualitative profile"
          dataKey="value"
          stroke="#3155d9"
          fill="#3155d9"
          fillOpacity={0.28}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}
