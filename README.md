[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=7988038&assignment_repo_type=AssignmentRepo)
<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="#documentation">
    <img src="images/logo.jpg" alt="Logo" width="80" height="100">
  </a>

<h3 align="center">Ellie-CLI</h3>

  <p align="center">
    CLI tool to update dependencies hassle-free
    <br />
    <a href="#documentation"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/dyte-submissions/dyte-vit-2022-sanjaybaskaran01">View Demo</a>
    ·
    <a href="https://github.com/dyte-submissions/dyte-vit-2022-sanjaybaskaran01/issues">Report Bug</a>
    ·
    <a href="https://github.com/dyte-submissions/dyte-vit-2022-sanjaybaskaran01/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#documentation">Documentation</a></li>
    <li><a href="#drawbacks">Drawbacks</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#contributor">Contributors</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


```
                  _____   _   _   _                   ____   _       ___ 
                 | ____| | | | | (_)   ___           / ___| | |     |_ _|
                 |  _|   | | | | | |  / _ \  _____  | |     | |      | | 
                 | |___  | | | | | | |  __/ |_____| | |___  | |___   | | 
                 |_____| |_| |_| |_|  \___|          \____| |_____| |___|
                                                                         
```
<div align="center">
  <img src="https://i.imgur.com/DrpJYzY.png">
</div>

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Typescript](https://www.typescriptlang.org/)
* [Node.js](https://nodejs.org/en/)
* [Commander.js](https://github.com/tj/commander.js)
* [Octokit](https://octokit.github.io/rest.js/v18/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started


To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

* yarn
  ```sh
  npm install -g yarn
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/dyte-submissions/dyte-vit-2022-sanjaybaskaran01.git
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```
3. Build the app 
   ```sh
   yarn build
   ```
4. Run the CLI
   ```sh
   ellie-cli --help
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

`ellie-cli -i input.csv packageName@version`

<img src="https://i.imgur.com/kt3saCh.png">

<br>

`ellie-cli -i input.csv packageName@version -t <token> -u`

<img src="https://i.imgur.com/hH0JwYk.png">

_For more examples, please refer to the [Documentation](#documentation)_

<p align="right">(<a href="#top">back to top</a>)</p>

## Documentation


| flag  | argument | description | required |
| ------------- | ------------- | ------------- | ------------- |
| `-V` `--version` | None | output the version number | `false` |
| `-i` `--input`  | input.csv | path to csv file  | `true` |
| `-u` `--update`  | None | update the dependency | `false` |
| `-t` `--token` | ghp_00000000000000001 | GitHub personal access token | `false` |
| `-h` `--help` | None | display help for command | `false` |
|  | \<version\> | package to be checked against | `true` |



<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## Drawbacks

1. Creating a PR also temporarily creates a folder ( gets deleted after job ) which generates `only` package-lock ( Takes time but better than completing cloning or installing all the node_modules) PS: Look at [src/lib/lockFileGenerator.ts](src/lib/lockFileGenerator.ts)
2. The changes are committed to a `static` branch name where error might arise if branch already exists PS: Look at [src/lib/generatePR.ts](./src/lib/generatePR.ts#16)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@sanjayybaskaran](https://twitter.com/sanjayybaskaran) - sanjaybaskaran01@gmail.com

Project Link: [https://github.com/dyte-submissions/dyte-vit-2022-sanjaybaskaran01](https://github.com/dyte-submissions/dyte-vit-2022-sanjaybaskaran01)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTOR -->
## Contributors


<table>
  <tr>
    <td align="center"><a href="https://github.com/sanjaybaskaran01"><img src="https://avatars.githubusercontent.com/u/72266283?v=4" width="100px;" alt=""/><br /><sub><b>Sanjay Baskaran</b></sub></a><br /><a href="mailto:sanjaybaskaran01@gmail.com?subject=SSdtIHZlcnkgYm9yZWQganVzIHRha2UgbWU=" target="_blank" title="Code">:boom:</a> 
  </tr>
</table>

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/dyte-submissions/dyte-vit-2022-sanjaybaskaran01.svg?style=for-the-badge
[contributors-url]: https://github.com/dyte-submissions/dyte-vit-2022-sanjaybaskaran01/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dyte-submissions/dyte-vit-2022-sanjaybaskaran01.svg?style=for-the-badge
[forks-url]: https://github.com/dyte-submissions/dyte-vit-2022-sanjaybaskaran01/network/members
[stars-shield]: https://img.shields.io/github/stars/dyte-submissions/dyte-vit-2022-sanjaybaskaran01.svg?style=for-the-badge
[stars-url]: https://github.com/dyte-submissions/dyte-vit-2022-sanjaybaskaran01/stargazers
[issues-shield]: https://img.shields.io/github/issues/dyte-submissions/dyte-vit-2022-sanjaybaskaran01.svg?style=for-the-badge
[issues-url]: https://github.com/dyte-submissions/dyte-vit-2022-sanjaybaskaran01/issues
[license-shield]: https://img.shields.io/github/license/dyte-submissions/dyte-vit-2022-sanjaybaskaran01.svg?style=for-the-badge
[license-url]: https://github.com/dyte-submissions/dyte-vit-2022-sanjaybaskaran01/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/sanjaybaskaran
[product-screenshot]: https://i.imgur.com/zurdKvq.png
