import { Typography } from "@mui/material"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import { useEffect, useState } from "react"

const sampleLineData = [
  { name: "Hour 0", units: 0 },
  { name: "Hour 1", units: 400 },
  { name: "Hour 2", units: 800 },
  { name: "Hour 3", units: 600 },
  { name: "Hour 4", units: 450 },
  { name: "Hour 5", units: 900 },
  { name: "Hour 6", units: 800 },
  { name: "Hour 7", units: 475 },
  { name: "Hour 8", units: 950 },
  { name: "Hour 9", units: 450 },
  { name: "Hour 10", units: 975 },
  { name: "Hour 11", units: 950 },
  { name: "Hour 12", units: 825 },
]

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}))

const ProductionLineChart = () => {
  const [lineData, setLineData] = useState([])

  useEffect(() => {
    setLineData(sampleLineData)
  }, [])

  return (
    <Item className='my-8'>
      <Typography variant="h4">
        <p className="text-center font-semibold py-2">Hourly Production Monitoring</p>
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={lineData} className="bg-white p-4 rounded-lg shadow-md">
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="units" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </Item>
  )
}

export default ProductionLineChart
