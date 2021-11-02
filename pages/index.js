import Head from 'next/head'
import Image from 'next/image'
import "bootstrap/dist/css/bootstrap.min.css";
import "fontawesome-free/css/all.css";

import {PROJECTS, PROJECT_CATEGORIES, getProjectCategory} from "../data/Projects";
import {useEffect, useState} from "react";

function Header() {
    return <header className={"shadow-sm"}>
        <nav className="navbar navbar-light bg-white border-bottom mb-3">
            <div className="container-fluid px-3">
                <a className="navbar-brand fw-bold" href="#">Avalanche Projects</a>
            </div>
        </nav>
    </header>;
}

function Hero() {
    return <div className="row">
        <div className="col-md-12">
            <h1>Avalanche Projects</h1>
            <p>The best projects on the Avalanche blockchain.</p>
        </div>
    </div>;
}

export default function Home() {
    let [projCat, setProjCat] = useState(PROJECT_CATEGORIES);
    let [projects, setProjects] = useState(PROJECTS)

    const handleProjCatClick = (e) => {
        setProjects(PROJECTS.filter(r=>r.categories.includes(getProjectCategory(e))))
    }
    const handleAllClick = (e) => {
        setProjects(PROJECTS)
    }


    return (
        <>
            <Head>
                <title>Avalanche Projects</title>
                <meta name="description" content="Avalanche blockchain projects. DeFi, NFTs, Yield Farms and more ..."/>
            </Head>
            <Header/>
            <main className="">
                <div className="container">
                    <Hero/>
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <button onClick={(e) => {
                                handleAllClick()
                            }} className={"btn btn-sm btn-light border shadow-sm me-2 mb-2"}>All</button>
                            {projCat.sort((a, b) => {
                                return b.slug <= a.slug
                            }).map(r => {
                                return <button key={r.slug} onClick={(e) => {
                                    handleProjCatClick(r.slug, null)
                                }} className={"btn btn-sm btn-light border shadow-sm me-2 mb-2"}>{r.name}</button>;
                            })}
                        </div>
                    </div>
                    <div className="row">
                        {
                            projects.map((project) => {
                                return <div key={project.slug} className="col-lg-4 mb-3">
                                    <div className="card shadow-sm">
                                        <div className="card-body">
                                            {project.categories.map((category) => {
                                                return <span key={category.slug}
                                                             className={"fw-light badge bg-light text-dark d-inline me-2"}>{category.name}</span>;
                                            })}
                                            <a href={project.url} className={"text-decoration-none"}><h3
                                                className={"mt-2 card-title fw-bold mb-0"}>{project.name}</h3></a>
                                            {Array.from({length: project.rating}, (x,i) => {
                                                return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="gold" className="bi bi-star-fill"
                                                            viewBox="0 0 16 16">
                                                    <path
                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                </svg>
                                            })}
                                            <p>{project.desc}</p>
                                            <div className="d-flex flex-row justify-content-between">
                                                <a className={"btn btn-sm btn-light border shadow-sm btn-block col mx-1"}
                                                   href="#"><i className="fab fa-twitter"/></a>
                                                <a className={"btn btn-sm btn-light border shadow-sm btn-block col mx-1"}
                                                   href="#"><i className="fab fa-discord"/></a>
                                                <a className={"btn btn-sm btn-light border shadow-sm btn-block col mx-1"}
                                                   href="#"><i className="fab fa-github"/></a>
                                                <a className={"btn btn-sm btn-light border shadow-sm btn-block col mx-1"}
                                                   href="#"><i className="fab fa-telegram"/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>;
                            })
                        }
                    </div>
                </div>
            </main>
        </>
    )
}
