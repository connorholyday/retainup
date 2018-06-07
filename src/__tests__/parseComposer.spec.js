const originalComposer = require('./testProject/composer.json');
let composer;

beforeAll(() => {
    composer = Object.assign({}, originalComposer);
});

describe('Get data from the composer file', () => {
    it('Can open the composer file');
    it('Can get the name of the project', () => {
        expect(composer.name).toBeTruthy();
    });
    it('Can get the dependencies', () => {
        expect(composer.require.php).toBeTruthy();
    });
});
