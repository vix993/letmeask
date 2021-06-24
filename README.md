# Move It:

## Content

1. [Status](#Status)
2. [Motivation](#Motivation) 
3. [Requirements](#Requirements)
4. [Pages](#Pages)
    - [Home](#Home)
    - [NewRoom](#NewRoom)
    - [AdminRoom](#NewRoom)
    - [PublicRoom](#PublicRoom)

## Status

![example workflow](https://github.com/vix993/letmeask/actions/workflows/test_on_push.yml/badge.svg)

## Motivation

This repository holds a project called [`LetMeAsk`](https://letmeask-it.vercel.app/). In this project, I created a platform in which users can post their questions, for other users to answer or interact with user Q&A's.

You can run it by cloning the repository. Running `cd letmeask`,`yarn install` then executing the command `npm run start`.

## Requirements

Typescript, Firebase, Tailwind Css, and more.

## Pages
### *Home*

##### /

###### Log In or Join Room

Log in with google to create a room. Or join an existing Q&A using the room ID.

<img src="./presentation/screenshotLanding.png" alt="screenshot of landing page UI"/>

### *NewRoom*

##### /rooms/new

###### Create Room

Create a room for your Q&A.

<img src="./presentation/screenshotNewRoom.png" alt="screenshot of new room page"/>

### *AdminRoom*

##### admin/rooms/:id

###### Manage your Room

Delete questions or close the room.

<img src="./presentation/adminRoom.png" alt="screenshot of admin room"/>

### *PublicRoom*

##### rooms/:id

###### Submit questions

Submit questions and engage with other user questions

<img src="./presentation/publicRoom.png" alt="screenshot of public room"/>
