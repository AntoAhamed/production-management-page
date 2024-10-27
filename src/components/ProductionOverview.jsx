import * as React from 'react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid2'
import ProductionCard from './ProductionCard'

const sampleProductionData = [
    { line: "Line A", status: "On Track", unitsProduced: 1200 },
    { line: "Line B", status: "Delayed", unitsProduced: 980 },
    { line: "Line C", status: "On Track", unitsProduced: 760 },
    { line: "Line D", status: "Delayed", unitsProduced: 1420 },
    { line: "Line E", status: "On Track", unitsProduced: 710 },
    { line: "Line F", status: "Delayed", unitsProduced: 2840 },
    { line: "Line G", status: "Delayed", unitsProduced: 840 },
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

function ProductionOverview() {
    const [productionData, setProductionData] = React.useState([])

    React.useEffect(() => {
        setProductionData(sampleProductionData)
    }, [])

    return (
        <Grid container spacing={2}>
            <Grid size={8}>
                <Item><ProductionCard bg={'#ffff00'} productionData={productionData[0]} /></Item>
            </Grid>
            <Grid size={4}>
                <Item><ProductionCard bg={'#00ff55'} productionData={productionData[1]} /></Item>
            </Grid>
            <Grid size={4}>
                <Item><ProductionCard bg={'#809fff'} productionData={productionData[2]} /></Item>
            </Grid>
            <Grid size={8}>
                <Item><ProductionCard bg={'#ff80ff'} productionData={productionData[3]} /></Item>
            </Grid>
            <Grid size={4}>
                <Item><ProductionCard bg={'#ff80b3'} productionData={productionData[4]} /></Item>
            </Grid>
            <Grid size={4}>
                <Item><ProductionCard bg={'#80ffcc'} productionData={productionData[5]} /></Item>
            </Grid>
            <Grid size={4}>
                <Item><ProductionCard bg={'#00ffff'} productionData={productionData[6]} /></Item>
            </Grid>
        </Grid>
    )
}

export default ProductionOverview
