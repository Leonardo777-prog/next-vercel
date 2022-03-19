import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { NavBar } from '../components/NavBar'
import { MainLayout } from '../layouts/MainLayout'

const ContactPage = () => {
    return (
        <MainLayout>
            <h1 className='title'>
                {/* Ir al about <a href="/about">about</a> */}
                Ir al about <Link href={'/about'}>about</Link>

            </h1>
        </MainLayout>
    )
}

export default ContactPage
