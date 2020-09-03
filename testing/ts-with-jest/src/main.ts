export const isInternalLink = (link: string) => /^\/(?!\/)/.test(link)


export class GenericNumber<T> {
    zeroValue: T;

    add: (x: T, y: T) => T;
}
