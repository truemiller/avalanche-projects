class Project {
    constructor(slug, name, categories, desc,  url, rating, twitter, telegram, discord, github) {
        this.slug = slug;
        this.name = name;
        this.desc = desc;
        this.categories = categories;
        this.url = url;
        this.rating = rating;
        this.twitter = twitter;
        this.telegram = telegram;
        this.discord = discord;
        this.github = github;
    }
}

class ProjectCategory {
    constructor(slug, name) {
        this.slug = slug;
        this.name = name;
    }
}

export let PROJECT_CATEGORIES = [
    new ProjectCategory("dex", "DEX"),
    new ProjectCategory("nft", "NFT"),
    new ProjectCategory("farm", "LP Farming"),
    new ProjectCategory("stake", "Staking"),
    new ProjectCategory("compound", "Compounder"),
    new ProjectCategory("nft-marketplace", "NFT Marketplace"),
    new ProjectCategory("stablecoin", "Stablecoin"),
    new ProjectCategory("lend", "Lending"),
    new ProjectCategory("launchpad", "Launchpad"),
]

export function getProjectCategory (slug)
{
    return PROJECT_CATEGORIES.find(x => x.slug === slug);
}

export let PROJECTS = [
    new Project(
        "pangolin",
        "Pangolin Exchange",
        [PROJECT_CATEGORIES.find(x => x.slug === "dex")],
        "Pangolin Exchange is the most used, longest standing, decentralized exchange on the Avalanche C-Chain.",
        "//pangolin.exchange",
        5
    ),
    new Project(
        "elk-finance",
        "Elk Finance",
        [getProjectCategory("dex"), getProjectCategory("nft"), getProjectCategory("farm")],
        "Elk Finance is a cross-chain liquidity network. A popular DEX, that protects again impermanent loss, and issues rare NFTs with real utility.",
        "//elk.finance",
        5
    ),
    new Project(
        "olive-cash",
        "Olive Cash",
        [getProjectCategory("dex"), getProjectCategory("farm"), getProjectCategory("compound"), getProjectCategory("stake")],
        "Elk Finance is a cross-chain liquidity network. A popular DEX, that protects again impermanent loss, and issues rare NFTs with real utility.",
        "//elk.finance",
        3
    ),
    new Project(
        "yeti-swap",
        "Yeti Swap",
        [getProjectCategory("dex"), getProjectCategory("nft"), getProjectCategory("farm"), getProjectCategory("nft-marketplace")],
        "Elk Finance is a cross-chain liquidity network. A popular DEX, that protects again impermanent loss, and issues rare NFTs with real utility.",
        "//elk.finance",
        3
    ),
    new Project(
        "lydia-finance",
        "Lydia Finance",
        [getProjectCategory("dex"), getProjectCategory("farm"), getProjectCategory("stake"), getProjectCategory("compound")],
        "Lydia Finance is an Avalanche-based DEX. Featuring a BSC bridge, lottery, and multiple innovative farming opportunities.",
        "//elk.finance",
        4
    )
]
