type Main = {
    name: string,
    icon: string | null,
    list: string,
    push: string | null,
    markdown: string | null,
    group_qq: string | null,
    group_tg: string | null,
    user_count: number | null,
}

type Manifest = {
    id: string,
    title: string,
    type: string,
    desc: string | null,
    markdown: string | null,
    version: string,
    ctime: string,
}

type DistManifest = Manifest & {
    author: string,
    source: string | null,
    url: string,
    down_count: number | null,
}

declare function toast(message: string): void;
