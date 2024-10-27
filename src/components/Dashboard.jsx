import * as React from 'react'
import Box from '@mui/material/Box'
import ProductionOverview from './ProductionOverview'
import ProductionLineChart from './ProductionLineChart'
import ProductionBarChart from './ProductionBarChart'
import ProductionPieChart from './ProductionPieChart'
import Footer from './Footer'
import { Grid2, Typography } from '@mui/material'

function Dashboard() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography>
                <p className='text-4xl font-bold p-5'>Dashboard</p>
            </Typography>

            <hr className='mb-3' />

            <ProductionOverview />

            <ProductionLineChart />

            <Grid2 container spacing={2} className='my-8'>
                <Grid2 size={7}>
                    <ProductionBarChart />
                </Grid2>
                <Grid2 size={5}>
                    <ProductionPieChart />
                </Grid2>
            </Grid2>

            <Footer />
        </Box>
    )
}

export default Dashboard
