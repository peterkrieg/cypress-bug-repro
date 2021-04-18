## Cypress Component Testing Bug

This repo is a minimal repro of a bug I encountered - where component tests can't be run if the cypress project is located at a different project than root. (ie, uses the `--project` flag with `cypress open`)

To reproduce:

- `yarn install`
- `yarn cypress:component-tests`
- Try clicking on `App.spec.tsx` and you will observer error in console of cypress

The non-component cypress tests work fine though, which you can see with `yarn cypress:open`. I created a git branch where I simply move the cypress config out of a nested folder (ie, remove the `e2e` folder) and the component tests work fine. The branch is `cypress-at-root`.
