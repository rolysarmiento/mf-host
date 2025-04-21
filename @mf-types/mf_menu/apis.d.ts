
    export type RemoteKeys = 'mf_menu/menu';
    type PackageType<T> = T extends 'mf_menu/menu' ? typeof import('mf_menu/menu') :any;