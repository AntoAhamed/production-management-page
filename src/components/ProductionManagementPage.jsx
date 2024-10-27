import * as React from 'react'
import { createTheme } from '@mui/material/styles'
import { Category, Dashboard, Home, Payments, Settings, ShoppingCart } from '@mui/icons-material'
import { AppProvider } from '@toolpad/core'
import { DashboardLayout } from '@toolpad/core'
import { useDemoRouter } from '@toolpad/core/internal'
import Logo from '../assets/logo.png'
import PageContent from './PageContent'

const NAVIGATION = [
    {
        segment: 'home',
        title: 'Home',
        icon: <Home />,
    },
    {
        segment: 'categories',
        title: 'Categories',
        icon: <Category />,
    },
    {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <Dashboard />,
    },
    {
        segment: 'orders',
        title: 'Orders',
        icon: <ShoppingCart />,
    },
    {
        segment: 'payments',
        title: 'Payments',
        icon: <Payments />,
    },
    {
        segment: 'settings',
        title: 'Settings',
        icon: <Settings />,
    }
]

const demoTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
})

function ProductionManagementPage() {
    const router = useDemoRouter('/dashboard')

    return (
        <AppProvider
            navigation={NAVIGATION}
            branding={{
                logo: <img src={Logo} alt="logo" />,
                title: 'GIMS',
            }}
            router={router}
            theme={demoTheme}
        >
            <DashboardLayout>
                <PageContent pathname={router.pathname} />
            </DashboardLayout>
        </AppProvider>
    )
}

export default ProductionManagementPage
