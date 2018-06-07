const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const composer = require('./testProject/composer.json');
const composerLock = fs.readFileSync(path.join(__dirname, '/testProject/composer.lock'));
const lockfile = JSON.parse(composerLock);

async function getPackage(repo) {
    const res = await fetch(`https://packagist.org/p/${repo}.json`);
    const json = await res.json();
    return json;
}

describe('Check the dependencies are up-to-date', () => {
    it('Can request packagist', async () => {
        const res = await getPackage('monolog/monolog');
        expect(res).toBeTruthy();
    });
    it('Knows a package is at latest', async () => {
        const res = await getPackage('rareloop/primer-core');
        // lockfile.packages.

        // lockfile.packages -> loop -> name = rareloop/primer-core -> version satisfies latest semver
    });
    it('Reports the project is up to date');
    it('Knows a package is out of date');
    it('Reports the project it out of date');
});

//https://packagist.org/p/monolog/monolog.json
