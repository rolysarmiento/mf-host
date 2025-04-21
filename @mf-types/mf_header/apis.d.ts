
    export type RemoteKeys = 'mf_header/header' | 'mf_header/useSession';
    type PackageType<T> = T extends 'mf_header/useSession' ? typeof import('mf_header/useSession') :T extends 'mf_header/header' ? typeof import('mf_header/header') :any;