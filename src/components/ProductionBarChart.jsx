import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const sampleBarData = [
    { name: 'Jan', production: 400 },
    { name: 'Feb', production: 300 },
    { name: 'Mar', production: 200 },
    { name: 'Apr', production: 278 },
    { name: 'May', production: 189 },
    { name: 'Jun', production: 489 },
    { name: 'Jul', production: 411 },
    { name: 'Aug', production: 511 },
    { name: 'Sep', production: 611 },
    { name: 'Oct', production: 589 },
]

const ProductionBarChart = () => {
    const [barData, setBarData] = useState([])

    useEffect(() => {
        setBarData(sampleBarData)
    }, [])

    return (
        <Box>
            <Typography variant="h5">
                <p className="text-center font-semibold py-2">Monthly Production</p>
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="production" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </Box>
    )
}

export default ProductionBarChart
