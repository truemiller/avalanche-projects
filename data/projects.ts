import {Tag, TAGS} from "./tags";
// @ts-ignore
import logos from "./logos";

export type Project = {
    slug: string
    title: string
    url: string
    description: string
    logo: any
    tags: Tag[]
}

export const PROJECTS: Project[] = [
    {
        slug: "elk-finance",
        url: "https://elk.finance",
        title: "Elk Finance",
        description: "An innovative bridge with DEX, staking with impermanent loss protection, and NFTs.",
        logo: logos.elk,
        tags: [TAGS.DEX, TAGS.YIELD_FARM, TAGS.NFT, TAGS.BRIDGE]
    },
    {
        slug: "pangolin-exchange",
        url: "https://pangolin.exchange",
        title: "Pangolin",
        description: "The first DEX on Avalanche. ",
        logo: logos.png,
        tags: [TAGS.DEX, TAGS.YIELD_FARM]
    },
    {
        slug: "trader-joe",
        url: "https://traderjoe.xyz",
        title: "Trader Joe",
        description: "Avalanche's main DEX.",
        logo: logos.joe,
        tags: [TAGS.DEX, TAGS.YIELD_FARM, TAGS.NFT, TAGS.NFT_MARKETPLACE, TAGS.LAUNCHPAD]
    },
    {
        slug: "yeti-swap",
        url: "https://yetiswap.app",
        title: "YetiSwap",
        description: "An OG Avalanche DEX with NFT marketplace.",
        logo: logos.yts,
        tags: [TAGS.DEX, TAGS.YIELD_FARM, TAGS.NFT, TAGS.NFT_MARKETPLACE]
    },
    {
        slug: "penguin-finance",
        url: "https://penguinfinance.io",
        title: "Penguin Finance",
        description: "A yield farm with games and other features.",
        logo: logos.pefi,
        tags: [TAGS.YIELD_FARM]
    },
    {
        slug: "avalaunch",
        url: "https://avalauch.app",
        title: "Avalaunch",
        description: "An OG Avalanche DEX with NFT marketplace.",
        logo: logos.xava,
        tags: [TAGS.YIELD_FARM, TAGS.LAUNCHPAD]
    },
    {
        slug: "yield-yak",
        url: "https://yieldyak.com",
        title: "Yield Yak",
        description: "An Avalanche-based yield optimizer and dex aggregator.",
        logo: logos.yak,
        tags: [TAGS.YIELD_FARM, TAGS.DEX_AGGREGATOR, TAGS.YIELD_OPTIMIZER]
    },
    {
        slug: "snowball",
        url: "https://snowball.network",
        title: "Snowball Network",
        description: "A feature rich DAO with yield farming, yield optimization, and more.",
        logo: logos.snowball,
        tags: [TAGS.YIELD_FARM, TAGS.YIELD_OPTIMIZER, TAGS.NFT]
    },
    {
        slug: "nftrade",
        url: "https://nftrade.com",
        title: "NFTrade",
        description: "A cross-chain NFT marketplace.",
        logo: logos.nftrade,
        tags: [TAGS.NFT, TAGS.NFT_MARKETPLACE]
    },
    {
        slug: "kalao",
        url: "https://kalao.io",
        title: "Kalao",
        description: "An Avalanche-based NFT marketplace with AR/VR integrations.",
        logo: logos.kalao,
        tags: [TAGS.NFT, TAGS.NFT_MARKETPLACE]
    },
]