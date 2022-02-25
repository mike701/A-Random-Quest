# A-Random-Quest README

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**A-Random-Quest** is a questing forum where a user can post a question for others to answer. The Idea for the name is in the idea of learning being a journey or a quest to focus on._

<br>

## MVP

_The **A-Random-Quest** MVP allows a user to post quests for others, asnwer quests, have a guest functionality for non-authorized users. To allow this there has to be User Auth and Questors/Users, Quests/posts, comments/answers._

- User Auth
- Questors/Users C.R.U.D.
- Quests/posts C.R.U.D.
- Comments/answers C.R.U.D.

<br>

### Goals

- _Sign-up as a user that can then be logged in to,_
- _Create Quests for outher users to answer._
- _Answer Quest solutions._
- _._
- _._

<br>

### Libraries and Dependencies

|   Library    | Description                                                            |
| :----------: | :--------------------------------------------------------------------- |
|    React     | _Front-end framework with JavaScriptX backbone._                       |
| React Router | _Handles changing between screens._                                    |
|     Ruby     | _Back-end language for handling server side logic._                    |
|    Rails     | _Backend framework for server side routing and database manipulation._ |
|  Tailwinds   | _Styling library for front-end._                                       |

<br>

### Client (Front End)

#### Wireframes

- Desktop Landing
  ![DeskTop](<https://github.com/mike701/A-Random-Quest/blob/2e000d645ea379a3451a59e84845e711639caca9/Desktop%20A.R.Q.%20(3).png>)

- Tablet Resource Index
  ![Tablet](<https://github.com/mike701/A-Random-Quest/blob/2e000d645ea379a3451a59e84845e711639caca9/Desktop%20A.R.Q.%20(5).png>)

- Mobile Resource Index
  ![Mobile](<https://github.com/mike701/A-Random-Quest/blob/2e000d645ea379a3451a59e84845e711639caca9/Desktop%20A.R.Q.%20(4).png>)

- Quest detail Screen
  ![Quest Details](<https://github.com/mike701/A-Random-Quest/blob/1edd8770326592ce74ed60ca28b909c41eaa348d/assets/Desktop%20A.R.Q.%20(6).png>)

- Adding Quests
  ![Quests addition](<https://github.com/mike701/A-Random-Quest/blob/1edd8770326592ce74ed60ca28b909c41eaa348d/assets/Desktop%20A.R.Q.%20(8).png>)

  - User Info
    ![User Info](<https://github.com/mike701/A-Random-Quest/blob/1edd8770326592ce74ed60ca28b909c41eaa348d/assets/Desktop%20A.R.Q.%20(9).png>)

- Log-In Screen
  ![Log-In](<https://github.com/mike701/A-Random-Quest/blob/1edd8770326592ce74ed60ca28b909c41eaa348d/assets/Desktop%20A.R.Q.%20(7).png>)

#### Component Tree

> ![flowchart of Component Architechture](https://github.com/mike701/A-Random-Quest/blob/553e6094c98fd8a9a6a20d1eff7b0a1bb09d3692/A.R.Q.%20component%20Hierarchy.png)

![Server Component Tree](https://gist.git.generalassemb.ly/davidtwhitlatch/414107e2560ae0bb65e233570f2fe056#file-component-tree-png)

#### Component Architecture

```structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ Layout.jsx
      |__ Footer.jsx
      |__ User-components.jsx
      |__ Posts-components.jsx
|__ services/

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                        | Priority | Estimated Time | Time Invested | Actual Time |
| --------------------------- | :------: | :------------: | :-----------: | :---------: |
| BackEnd-(USER,POST,COMMENT) |    H     |     3 hrs      |     5hrs      |    7hrs     |
| BackEnd-Deploy              |    H     |     1 hrs      |     1hrs      |    1hrs     |
| Create CRUD Front-END       |    H     |     3 hrs      |    2+ hrs     |    2+hrs    |
| Screens                     |    L     |     3 hrs      |      hrs      |     hrs     |
| Component Hierarchy         |    M     |     2 hrs      |      hrs      |     hrs     |
| Layout                      |    L     |     2 hrs      |      hrs      |     TBD     |
| USER Components             |    H     |     4 hrs      |      hrs      |     hrs     |
| Post Components             |    H     |     4 hrs      |      hrs      |     hrs     |
| Comments Components         |    H     |     4 hrs      |      hrs      |     hrs     |
| Card/Footer                 |    M     |     2 hrs      |      hrs      |     hrs     |
| Styling                     |    L     |     3 hrs      |      hrs      |     TBD     |
| Add Contact Form            |    L     |     3 hrs      |      hrs      |     TBD     |
| Favorites                   |    M     |     5 hrs      |      hrs      |     TBD     |
| Debugging(prop-drilling)    |    M     |     3 hrs      |      hrs      |     TBD     |
| TOTAL                       |          |     41 hrs     |      hrs      |     TBD     |

<br>

### Server (Back End)

#### ERD Model

![ERD](https://github.com/mike701/A-Random-Quest/blob/1c10ea407a3e1a253bb15cb9e8098836f0d9ba45/assets/ERD.drawio.png)
<br>

---

## Post-MVP

- 3d Questing world like metaverse
- Guest Functionality

---

## Code Showcase

## Code Issues & Resolutions
