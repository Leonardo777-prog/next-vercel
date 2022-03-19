import React from 'react'
import Link from 'next/link'
import { NavBar } from '../components/NavBar'
import { MainLayout } from '../layouts/MainLayout'
import { DarkLayout } from '../layouts/DarkLayout'

const About = () => {
    return (
        <>

            <h1>About page</h1>
            Ir al about <Link href="/">home</Link>


        </>
    )
}

export default About

About.getLayout = function getLayout(page: JSX.Element) {
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}
