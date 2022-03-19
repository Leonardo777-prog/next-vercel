import React from 'react'
import { MainLayout } from '../../layouts/MainLayout'
import Link from 'next/link'
const IndexPricingPage = () => {
    return (
        <MainLayout>
            <h1>Pricing Page</h1>
            Ir al about <Link href="/">home</Link>
        </MainLayout>
    )
}
export default IndexPricingPage
