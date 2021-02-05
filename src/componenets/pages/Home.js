import React from 'react'
import Navbar from './includes/widgets/Navbar'
import IndexBanner from './includes/components/IndexBanner'

export default function Home() {
    return (
        <div className="Home-section">
            <Navbar />
            <IndexBanner />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </div>
    )
}
