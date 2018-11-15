/* @flow */

import type { PackageDriver } from 'pkg-tests-core';

const {
  fs: { createTemporaryFolder, writeFile, writeJson },
  tests: { getPackageArchivePath, getPackageHttpArchivePath, getPackageDirectoryPath },
} = require('pkg-tests-core');

module.exports = (makeTemporaryEnv: PackageDriver) => {
  describe(`Basic tests`, () => {
    test(
      `it should correctly install a single dependency that contains no sub-dependencies`,
      makeTemporaryEnv(
        {
          dependencies: { [`no-deps`]: `1.0.0` },
        },
        async ({ path, run, source }) => {
          console.log('Start install');
          console.log(Date.now());
          await run(`install`);
          console.log(Date.now());
          console.log('Finish install');

          await expect(source(`require('no-deps')`)).resolves.toMatchObject({
            name: `no-deps`,
            version: `1.0.0`,
          });

          console.log(Date.now());
          console.log('Finish expect');
        },
      ),
    );

    test(
      `it should correctly install a single dependency that contains no sub-dependencies`,
      makeTemporaryEnv(
        {
          dependencies: {[`no-deps`]: `1.0.0`},
        },
        async ({path, run, source}) => {
          console.log('Start');
          console.log(Date.now());
          await run(`install`);
          console.log(Date.now());
          console.log('Finish');

          await expect(source(`require('no-deps')`)).resolves.toMatchObject({
            name: `no-deps`,
            version: `1.0.0`,
          });

          console.log(Date.now());
          console.log('Finish expect');
        },
      ),
    );

    test(
      `it should correctly install a single dependency that contains no sub-dependencies`,
      makeTemporaryEnv(
        {
          dependencies: {[`no-deps`]: `1.0.0`},
        },
        async ({path, run, source}) => {
          console.log('Start');
          console.log(Date.now());
          await run(`install`);
          console.log(Date.now());
          console.log('Finish');

          await expect(source(`require('no-deps')`)).resolves.toMatchObject({
            name: `no-deps`,
            version: `1.0.0`,
          });

          console.log(Date.now());
          console.log('Finish expect');
        },
      ),
    );

    test(
      `it should correctly install a single dependency that contains no sub-dependencies`,
      makeTemporaryEnv(
        {
          dependencies: {[`no-deps`]: `1.0.0`},
        },
        async ({path, run, source}) => {
          console.log('Start');
          console.log(Date.now());
          await run(`install`);
          console.log(Date.now());
          console.log('Finish');

          await expect(source(`require('no-deps')`)).resolves.toMatchObject({
            name: `no-deps`,
            version: `1.0.0`,
          });

          console.log(Date.now());
          console.log('Finish expect');
        },
      ),
    );

    test(
      `it should correctly install a single dependency that contains no sub-dependencies`,
      makeTemporaryEnv(
        {
          dependencies: { [`no-deps`]: `1.0.0` },
        },
        async ({ path, run, source }) => {
          console.log('Start');
          console.log(Date.now());
          await run(`install`);
          console.log(Date.now());
          console.log('Finish');

          await expect(source(`require('no-deps')`)).resolves.toMatchObject({
            name: `no-deps`,
            version: `1.0.0`,
          });

          console.log(Date.now());
          console.log('Finish expect');
        },
      ),
    );
  });
};
