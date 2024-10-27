import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Dashboard from './Dashboard'

function PageContent({ pathname }) {
    let content
    switch (pathname) {
        case '/home':
            content = "This is home"
            break
        case '/categories':
            content = "This is categories"
            break
        case '/dashboard':
            content = <Dashboard />
            break
        case '/orders':
            content = "This is orders"
            break
        case '/payments':
            content = "This is payments"
            break
        case '/settings':
            content = "This is settings"
            break
        default:
            content = <Typography>Page not found</Typography>
            break
    }

    return (
        <Box>
            {content}
        </Box>
    )
}

PageContent.propTypes = {
    pathname: PropTypes.string.isRequired,
}

export default PageContent
