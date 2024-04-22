
const { default: testFunc } = await import("../");

describe("basic random number tests", () => {
    test("single random number test", async () => {
        let bottom = false;
        let top = false;

        for (let i = 0; i < 1000; i++) {
            const val = testFunc(10);
            expect(val).toBeGreaterThanOrEqual(0);
            expect(val).toBeLessThanOrEqual(10);

            if (val == 0) {
                bottom = true;
            }

            if (val == 10) {
                top = true;
            }
        }

        expect(bottom && top).toEqual(true);
    });

    test("ranged random number test", async () => {
        let bottom = false;
        let top = false;

        for (let i = 0; i < 1000; i++) {
            const val = testFunc(10, 20);
            expect(val).toBeGreaterThanOrEqual(10);
            expect(val).toBeLessThanOrEqual(20);

            if (val == 10) {
                bottom = true;
            }

            if (val == 20) {
                top = true;
            }
        }

        expect(bottom && top).toEqual(true);
    });

    test("no range", async () => {
        expect(testFunc(5, 5)).toBe(5);
    });

    test("switched range", async () => {
        const val = testFunc(20, 10);
        expect(val).toBeGreaterThanOrEqual(10);
        expect(val).toBeLessThanOrEqual(20);
    });
});
