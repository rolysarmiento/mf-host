
    export type RemoteKeys = 'mf_login/login';
    type PackageType<T> = T extends 'mf_login/login' ? typeof import('mf_login/login') :any;