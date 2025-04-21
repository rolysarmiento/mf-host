
    export type RemoteKeys = 'mf_footer/footer';
    type PackageType<T> = T extends 'mf_footer/footer' ? typeof import('mf_footer/footer') :any;