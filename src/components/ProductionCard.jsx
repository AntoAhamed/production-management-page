import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'

function ProductionCard(props) {
    const { bg, productionData } = props

    return (
        <Card sx={{ minWidth: 275, background: bg, color: 'black' }}>
            <CardContent>
                <Box component="div" className='flex justify-around mb-3'>
                    <Typography variant='h4'>
                        <p className='font-bold'>{productionData?.line}</p>
                    </Typography>
                    <Typography variant="h6" component="div">
                        {productionData?.status}
                    </Typography>
                </Box>
                <Box component="div" className='flex justify-around'>
                    <Typography variant='h6'>
                        Units Produced:
                    </Typography>
                    <Typography variant="h5">
                        <p className='font-bold'>{productionData?.unitsProduced}</p>
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default ProductionCard
