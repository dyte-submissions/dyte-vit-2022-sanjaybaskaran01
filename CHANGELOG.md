# Changelog

## v1.1.1
- FIX DRAWBACK Generates unique branch name for fork
## v1.1.0
- Added package manager option
- Process.exit(1) when error is thrown

### Added or Changed
- option to switch between package managers ('yarn' | 'npm') for each repo
- by default it considers npm

## v1.0.5
- Lock file generation

### Added or Changed
- Lock file now generates much faster.
## v1.0.1
- Fully functional CLI Tool to update dependencies

### Added or Changed
- Functionality to verify versions of all the repos present in .csv 
- Functionality to create PR with updated package.json & package-lock.json
- Additional -t flag which accepts personal access token
- Added README.MD

## v0.0.1

### Added or Changed
- Functionality to view single static URL package dependency and verifiy
