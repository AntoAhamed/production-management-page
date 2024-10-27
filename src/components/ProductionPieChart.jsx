import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const samplePieData = [
    { name: 'Completed', value: 400 },
    { name: 'Pending', value: 300 },
    { name: 'In Progress', value: 200 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28']

const ProductionPieChart = () => {
    const [pieData, setPieData] = useState([])

    useEffect(() => {
        setPieData(samplePieData)
    }, [])

    return (
        <Box>
            <Typography variant="h5">
                <p className="text-center font-semibold py-2">Production Status Distribution</p>
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
                        {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </Box>
    )
}

export default ProductionPieChart
