// @ts-ignore
import Image from "next/image"
import {PROJECTS} from "../data/projects";
import {Fragment, useState} from "react";
import {APP_NAME} from "../config/consts";
import {TAGS} from "../data/tags";
import Link from "next/link";
import Head from "next/head";

function TagSelector({active, setActive}) {
    function handleFilter(filter) {
        setActive(filter)
    }

    return <div className={"container mt-3"}>
        <ul className="nav nav-pills justify-content-center">
            {Object.keys(TAGS).map(tag => {
                const handleClick = () => {
                    if (active === TAGS[tag].slug)
                        setActive("")
                    else
                        setActive(TAGS[tag].slug);
                }
                return <li className="nav-item" key={tag}>
                    <Link href="#" ><a onClick={() => {
                        handleFilter(TAGS[tag].slug)
                    }} className={`nav-link ${active === TAGS[tag].slug ? 'active' : ''}`} >{TAGS[tag].title}</a></Link>
                </li>
            })}
        </ul>
    </div>
}

export default function Home() {
    const [active, setActive] = useState("")

    function handleFilter(slug) {
        if (active === slug) {
            setActive("")
        } else {
            setActive(slug)
        }
    }

    return (
        <>
            <Head>
                <title>{APP_NAME}</title>
                <meta property={"description"} content={"Find projects on the Avalanche blockchain."} />
            </Head>
            <Navbar/>
            <Header/>
            <TagSelector active={active} setActive={handleFilter}/>
            <Body active={active}/>
        </>
    )
}

export function Navbar() {
    return <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <Link href="/"><a className={"navbar-brand"}>{APP_NAME}</a></Link>
        </div>
    </nav>
}

export function Header() {
    return <header>
        <h1 className={"text-center display-1 fw-bolder"}>{APP_NAME}</h1>
        <p className={"text-center"}>Aggregating projects on Avalanche blockchain</p>
    </header>
}

export function Body(props) {
    const activeTagSlug = props.active
    const activeTag = Object.keys(TAGS).map(tag => TAGS[tag]).find(t => t.slug === activeTagSlug)

    return <div className="container">
        <div className="row" data-masonry='{"percentPosition": true }'>
            {PROJECTS.filter(project => project.tags.includes(activeTag) || activeTagSlug === "").map(project => {
                return <div key={project.slug} className="col-md-4 mt-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex">
                                <img src={project.logo.src} width={38} height={38} className={"me-2"} loading={"lazy"}
                                     alt={`${project.title} logo`} title={`${project.title}`}/>
                                <Link href={project.url}>
                                    <a href="" className={"text-decoration-none"}>
                                        <h2 className={"fw-bolder"}>{project.title}</h2>
                                    </a>
                                </Link>
                            </div>
                            <div className={"mb-1"}>
                                {project.tags.map(tag => {
                                    return <span key={tag.slug}
                                                 className={"badge bg-light text-dark"}>{tag.title}</span>
                                })}
                            </div>
                            <p>{project.description}</p>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
}