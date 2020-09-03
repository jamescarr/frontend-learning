import {isInternalLink, GenericNumber} from './main';

describe('internal link checker', () => {
    it('should return false given external link', () => {
        expect(isInternalLink('https://google.com')).toBe(false)
    })

    it('should return true given internal link', () => {
        expect(isInternalLink('/some-page')).toBe(true)
    })
})

describe('Typescript Features', () => {
    describe('typed arrays', () => {
        it('still allows string types in the runtime', () => {
            let list: number[] = [1, 2, 3];

            list.push("Foo")

            expect(list).toEqual([1, 2, 3, "Foo"])
        })
    })

    it("has generics", () => {
        let theGenericNumber = new GenericNumber<number>();
        theGenericNumber.zeroValue = 0;
        theGenericNumber.add = (x, y) => x + y;

        expect(theGenericNumber.add(4, 3)).toEqual(7);
    })
})


