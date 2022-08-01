import elkLogo from "../logos/elk.png"
import pngLogo from "../logos/png.png"
import joeLogo from "../logos/joe.png"
import ytsLogo from "../logos/yts.png"
import pefiLogo from "../logos/pefi.png"
import xavaLogo from "../logos/avalaunch.webp"
import yakLogo from "../logos/yak.webp"
import {Tag, TAGS} from "./tags";

export type Project = {
  slug: string
  title:string
  url:string
  description:string
  logo: any
  tags: Tag[]
}

export const PROJECTS : Project[] = [
  {
    slug: "elk-finance",
    url: "https://elk.finance",
    title: "Elk Finance",
    description: "An innovative bridge with DEX, staking with impermanent loss protection, and NFTs.",
    logo: elkLogo,
    tags: [TAGS.DEX, TAGS.YIELD_FARM, TAGS.NFT, TAGS.BRIDGE]
  },
  {
    slug: "pangolin-exchange",
    url: "https://pangolin.exchange",
    title: "Pangolin",
    description: "The first DEX on Avalanche. ",
    logo: pngLogo,
    tags: [TAGS.DEX, TAGS.YIELD_FARM]
  },
  {
    slug: "trader-joe",
    url: "https://traderjoe.xyz",
    title: "Trader Joe",
    description: "Avalanche's main DEX.",
    logo: joeLogo,
    tags: [TAGS.DEX, TAGS.YIELD_FARM, TAGS.NFT, TAGS.NFT_MARKETPLACE, TAGS.LAUNCHPAD]
  },
  {
    slug: "yeti-swap",
    url: "https://yetiswap.app",
    title: "YetiSwap",
    description: "An OG Avalanche DEX with NFT marketplace.",
    logo: ytsLogo,
    tags: [TAGS.DEX, TAGS.YIELD_FARM, TAGS.NFT, TAGS.NFT_MARKETPLACE]
  },
  {
    slug: "penguin-finance",
    url: "https://penguinfinance.io",
    title: "Penguin Finance",
    description: "A yield farm with games and other features.",
    logo: pefiLogo,
    tags: [TAGS.YIELD_FARM]
  },
  {
    slug: "avalaunch",
    url: "https://avalauch.app",
    title: "Avalaunch",
    description: "An OG Avalanche DEX with NFT marketplace.",
    logo: xavaLogo,
    tags: [ TAGS.YIELD_FARM,TAGS.LAUNCHPAD]
  },
  {
    slug: "yield-yak",
    url: "https://yieldyak.com",
    title: "Yield Yak",
    description: "An Avalanche-based yield optimizer and dex aggregator.",
    logo: yakLogo,
    tags: [ TAGS.YIELD_FARM,TAGS.DEX_AGGREGATOR, TAGS.YIELD_OPTIMIZER]
  },
]