const generateId = require('../../src/utils/generateId');

describe('Generate unique Id', () => {
    it('should generate unique Id', () => {
        const id = generateId();

        expect(id).toHaveLength(8);
    });
});