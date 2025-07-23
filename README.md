<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
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
[![project_license][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Pandipipas/lira-bot">
    <img src="https://i.imgur.com/L59vC5A.png" alt="Logo" width="128" height="128">
  </a>

<h3 align="center">Lira Bot</h3>

  <p align="center">
    A Discord bot for managing tournaments with the Challonge API. Run brackets, track scores, and update results directly in your server.
    <br />
    <br />
    <a href="https://github.com/Pandipipas/lira-bot/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/Pandipipas/lira-bot/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#dependencies">Dependencies</a></li>
    <li><a href="#setup">Setup</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- GETTING STARTED -->
## Built With

* [![NodeJS][Nodejs]][Node-url]
* [![JavaScript][Javascript]][Javascript-url]
* [![DiscordJS][Discordjs]][Discordjs-url]
* [![Challonge][Challonge]][Challonge-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Dependencies

- **colors** → latest
- **discord.js** → 14.21.0 or newer
- **dotenv** → latest
- **mongoose** → latest
- **quick-yaml.db** → latest

> [!NOTE]
> **Node.js v22.12.0** or newer is required to run **discord.js**.

### Setup

1. Download this project
2. Extract the **.zip** file into a normal folder.
3. Open your code editor, click on **Open Folder**, and select the new created folder.
4. Rename the following files:

- `src/example.config.js` → `src/config.js`: Used for handler configuration.
- `.env.example` → `.env`: Used for secrets, like the Discord bot token.
- `example.database.yml` → `database.yml`: Used as a main file for the database.
- `example.terminal.log` → `terminal.log`: Used as a clone of terminal (to save previous terminal messages).

5. Fill all the required values in **config.js** and **.env**.

> [!CAUTION]
> Please remember not to share your Discord bot token! This will give access to attackers to do anything they want with your bot, so please keep the token in a safe place, which is the **.env** file.

6. Initialize a new project: `npm init` (To skip every step, do `npm init -y`).
7. Install all [required dependencies](#dependencies): `npm install`

8. Run the command `node .` or `npm run start` to start the bot.
9. Enjoy! The bot should be online.

### MongoDB Setup

1. Go to the [MongoDB](https://www.mongodb.com/) website.
2. Create an account using a safe email and password.

3. Once on the Project page, create a project with the name of your application.
4. On the clusters page of your project, create a free or paid cluster. (This is your preference.)

5. After the cluster creation you will be prompted to connect to your application. Select `Connecting with MongoDB Driver`
6. Copy the connection URI and paste it in the `.env` under `DATABASE_URI`
7. On `src/config.js` set `useMongoDB: true` 

>[!CAUTION]
> Please remember not to share your MongoDB Database URI! This will give access to attackers to do anything they want with your data and database including stealing and modifying it, so please keep the URI in a safe place, which is the **.env** file.

8. Run the command `node .` or `npm run start` to start the bot.
9. Now MongoDB will be connected!



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/Pandipipas/lira-bot/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Pandipipas/lira-bot" alt="contrib.rocks image" />
</a>



<!-- LICENSE -->
## License

Distributed under the GPL-3.0. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Pandipipas - [@Pandipipas](https://twitter.com/Pandipipas) - pablocg182000@gmail.com

Project Link: [https://github.com/Pandipipas/lira-bot](https://github.com/Pandipipas/lira-bot)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Base bot template](https://github.com/TFAGaming/DiscordJS-V14-Bot-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Pandipipas/lira-bot.svg?style=for-the-badge
[contributors-url]: https://github.com/Pandipipas/lira-bot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Pandipipas/lira-bot.svg?style=for-the-badge
[forks-url]: https://github.com/Pandipipas/lira-bot/network/members
[stars-shield]: https://img.shields.io/github/stars/Pandipipas/lira-bot.svg?style=for-the-badge
[stars-url]: https://github.com/Pandipipas/lira-bot/stargazers
[issues-shield]: https://img.shields.io/github/issues/Pandipipas/lira-bot.svg?style=for-the-badge
[issues-url]: https://github.com/Pandipipas/lira-bot/issues
[license-shield]: https://img.shields.io/github/license/Pandipipas/lira-bot.svg?style=for-the-badge
[license-url]: https://github.com/Pandipipas/lira-bot/blob/master/LICENSE.txt
[product-screenshot]: images/screenshot.png
[Challonge]: https://img.shields.io/badge/Challonge.com-EB844E?style=for-the-badge&logo=fireship&logoColor=white
[Challonge-url]: https://challonge.com/
[Javascript]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[Javascript-url]: https://start.gg/
[Nodejs]: https://img.shields.io/badge/Node.JS-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/
[Discordjs]: https://img.shields.io/badge/discord.js-5865F2?style=for-the-badge&logo=discorddotjs&logoColor=white
[Discordjs-url]: https://nodejs.org/