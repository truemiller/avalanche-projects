// @ts-ignore
import Image from "next/image"
import {PROJECTS} from "../data/projects";
import {Fragment, useState} from "react";
import {APP_NAME} from "../config/consts";
import {TAGS} from "../data/tags";
// @ts-ignore
import Link from "next/link";
// @ts-ignore
import Head from "next/head";
import {FAQS} from "../data/faqs";

function FAQs() {
    return <div className={"container"}>
        <h2 className={"mt-3 fw-bolder"}>FAQs</h2>
        {FAQS.map(faq => {
            return <>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
            </>
        })}
    </div>;
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
        <div className={"d-flex flex-column vh-100"}>
            <Head>
                <title>{APP_NAME}</title>
                <meta property={"description"} content={"Find projects on the Avalanche blockchain."}/>
            </Head>
            <Navbar/>
            <Header/>
            <TagSelector active={active} setActive={handleFilter}/>
            <Body active={active}/>
            <FAQs/>
            <Footer/>
        </div>
    )
}

function Navbar() {
    return <nav className="navbar navbar-light bg-light shadow-sm">
        <div className="container">
            <Link href="/"><a className={"navbar-brand"}>{APP_NAME}</a></Link>
        </div>
    </nav>
}

function Header() {
    return <header className={"container mt-3"}>
        <h1 className={"display-1 fw-bolder"}>{APP_NAME}</h1>
        <p className={"mb-0"}>Aggregating projects on Avalanche blockchain</p>
    </header>
}

function TagSelector({active, setActive}) {
    const tagArray = Object.keys(TAGS).map(tag => TAGS[tag])

    function handleFilter(filter) {
        setActive(filter)
    }

    return <div className={"container mt-3"}>
        <ul className="nav nav-pills ">
            {tagArray.map(tag => {
                const handleClick = () => {
                    if (active === tag.slug)
                        setActive("")
                    else
                        setActive(tag.slug);
                }
                return <li className="nav-item shadow-sm me-3 mb-3 border rounded" key={tag}>
                    <Link href="#"><a onClick={() => {
                        handleFilter(tag.slug)
                    }} className={`nav-link ${active === tag.slug ? 'active' : ''}`}>{tag.title}</a></Link>
                </li>
            })}
        </ul>
    </div>
}

export function Body(props) {
    const activeTagSlug = props.active
    const activeTag = Object.keys(TAGS).map(tag => TAGS[tag]).find(t => t.slug === activeTagSlug)

    return <div className="container">
        <h2 className={"mt-0 fw-bolder"}>Projects</h2>
        <div className="row" data-masonry='{"percentPosition": true }'>
            {PROJECTS.filter(project => project.tags.includes(activeTag) || activeTagSlug === "").map(project => {
                return <div key={project.slug} className="col-md-4 mt-2">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <div className="d-flex">
                                <img src={project.logo.src} width={38} height={38}
                                     className={"me-2 rounded-circle border"} loading={"lazy"}
                                     alt={`${project.title} logo`} title={`${project.title}`}/>
                                <Link href={project.url}>
                                    <a className={"text-decoration-none"}>
                                        <h3 className={"fw-bolder"}>{project.title}</h3>
                                    </a>
                                </Link>
                            </div>
                            <div className={"mb-1"}>
                                {project.tags.map(tag => {
                                    return <span key={tag.slug}
                                                 className={"badge bg-light text-dark me-2 mt-2  border"}>{tag.title}</span>
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

function Footer() {
    return <footer className={"mt-auto bg-light shadow-sm"}>
        <div className="text-center p-3">
            © 2022, <a className="" href="https://mlxn.ltd/">MLXN Ltd</a>. <a href={"https://t.me/truemiller1"}>Contact
            us via Telegram</a>.
        </div>
    </footer>
}