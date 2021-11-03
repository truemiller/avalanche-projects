class Project {
    constructor(slug, name, categories, desc, url, rating, logo, twitter, telegram, discord, github) {
        this.slug = slug;
        this.name = name;
        this.desc = desc;
        this.categories = categories;
        this.url = url;
        this.rating = rating;
        this.logo = logo;
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
    new ProjectCategory("staking", "Staking"),
    new ProjectCategory("compound", "Compounder"),
    new ProjectCategory("nft-marketplace", "NFT Marketplace"),
    new ProjectCategory("stablecoin", "Stablecoin"),
    new ProjectCategory("lend", "Lending"),
    new ProjectCategory("launchpad", "Launchpad"),
]

export function getProjectCategory(slug) {
    return PROJECT_CATEGORIES.find(x => x.slug === slug);
}

export let PROJECTS = [
    new Project(
        "pangolin",
        "Pangolin Exchange",
        [PROJECT_CATEGORIES.find(x => x.slug === "dex")],
        "Pangolin Exchange is the most used, longest standing, decentralized exchange on the Avalanche C-Chain.",
        "//pangolin.exchange",
        5,
        "https://cryptologos.net/logos/png.png",
        "//twitter.com/pangolinexchange"
    ),
    new Project(
        "elk-finance",
        "Elk Finance",
        [getProjectCategory("dex"), getProjectCategory("nft"), getProjectCategory("farm")],
        "Elk Finance is a cross-chain liquidity network. A popular DEX, that protects again impermanent loss, and issues rare NFTs with real utility.",
        "//elk.finance",
        5,
        "https://cryptologos.net/logos/elk.png",
        "//twitter.com/elkfinance"
    ),
    new Project(
        "olive-cash",
        "Olive Cash",
        [getProjectCategory("dex"), getProjectCategory("farm"), getProjectCategory("compound"), getProjectCategory("staking"), getProjectCategory("launchpad")],
        "Olive Cash is a multi-chain PancakeSwap clone. They support new projects' growth. And offer multiple farms, both LP and single staking.",
        "//olive.cash",
        3,
        "/logos/olive.png",
        "//twitter.com/OliveCashBsc"
    ),
    new Project(
        "yeti-swap",
        "Yeti Swap",
        [getProjectCategory("dex"), getProjectCategory("nft"), getProjectCategory("farm"), getProjectCategory("nft-marketplace")],
        "YetiSwap is an early Avalanche DEX. A uniswap fork. They recently expanded into the NFT space, providing a marketplace for traders.",
        "//yetiswap.app",
        3,
        "/logos/yts.png",
    ),
    new Project(
        "lydia-finance",
        "Lydia Finance",
        [getProjectCategory("dex"), getProjectCategory("farm"), getProjectCategory("staking"), getProjectCategory("compound"), getProjectCategory("launchpad")],
        "Lydia Finance is an Avalanche-based DEX. Featuring a BSC bridge, lottery, and multiple innovative farming opportunities.",
        "//lydia.finance",
        4,
        "/logos/lyd.png",
    ),
    new Project(
        "smartcoin",
        "SmartCoin",
        [getProjectCategory("staking")],
        "A higgh APR yield farm. Users' yields are doubled at set milestones. Aggressive inbound marketing videos. Has no use-case but farming.",
        "//smartcoin.farm",
        2,
        "/logos/smrt.jpg",
        "//twitter.com/0xSmartCoin"
    ),
    new Project(
        "kalao",
        "Kalao",
        [getProjectCategory("nft-marketplace")],
        "Avalanche's premier NFT marketplace. Will built in 3D virtual worlds, VR, and rich technological features throughout.",
        "//kalao.io",
        5,
        "",
        "//twitter.com/GetKalao"
    ),
    new Project(
        "teddy-cash",
        "Teddy Cash",
        [getProjectCategory("lend"), getProjectCategory("stablecoin"), getProjectCategory("staking"), getProjectCategory("farm")],
        "Teddy Cash is an interest free lender. Forked from Liquity. Audited by Hashex. Overcollateralised loans that mint TSD, the Teddy Cash stablecoin.",
        "//teddy.cash",
        4,
        ""
    )
]
