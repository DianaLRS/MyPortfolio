import React from 'react';
import Cards from './Cards';
import { Container } from 'react-bootstrap';
import {aesthetica, budget, litWine, notetaker, partie, workout, work} from './images';




    const mediaItems = [
        {
            title: "AESTHETICA",
            alt: "aesthetica-app",
            text: "A user friendly and interactive app that bridges fashion and community. Made with Handlebars, MySQL, and third-party API integration.",
            tech: "Node.js, Express, MySQL, Sequelize ORM, Handlebars, Heroku, MVC paridigm, Pexels API",
            images: [{ src: aesthetica.a},{src: aesthetica.b},{src: aesthetica.c},{src: aesthetica.d}]
        },
        {
            title: "PARTIE APP",
            alt: "partie-app-react",
            text: "A MERN Stack + Material-UI Framework app to keep track of upcoming events, the budget, to-do's, invoices and RSVPs.",
            tech: "MERN Stack, SendGrid, Material-UI Framework",
            images: [{ src: partie.p1},{src: partie.p2},{ src: partie.p3}, {src: partie.p4},{src:partie.p5}]
        },
        {
            title: "LIT & WINE",
            alt: "litwine-app",
            text: "A simple HTML5/CSS/JS recommendation engine that helps avid readers pair their choice of genre or author with a corresponding wine using third-party API integration.",
            tech: "HTML5, CSS, JavaScript, Open Weather Map API, GoogleBooks API, NYT Book Review API ",
            images: [{ src: litWine.wine1},{src: litWine.wine2},{src: litWine.wine3}]
        },
        {
            title: "WORKOUT TRACKER",
            alt: "workout-app",
            text: "This Express + MongoDB fitness app allows users to add new workouts and update exsisting workouts along with a visual display to track progress. ",
            tech: "MongoDB, Mongoose, Node.js, Express, Morgan",
            images: [{ src: workout.w1},{src: workout.w2},{src: workout.w3},{src: workout.w4},{src: workout.w5}]
        },
        {
            title: "BUDGET TRACKER",
            alt: "budget-app",
            text: "Track your expenses both online and offline thanks to its PWA format.",
            tech: "Node.js, Express, MongoDB, Mongoose",
            images: [{ src: budget.bgt1},{src: budget.bgt2}]
        },
        {
            title: "NOTE TAKER APP",
            alt: "note-taker-app",
            text: "Write, save, edit, and delete notes with a clean and user friendly interface",
            tech: "Node.js, Express, Path, fs",
            images: [{ src: notetaker.note1},{src: notetaker.note2},{src: notetaker.note3}]
        },    
    //    { title: "WORKDAY PLANNER",
    //     alt: "work-planner-app",
    //     text: "this is the description",
    //     tech: "this is the tech stuff",
    //     images: [{ src: work.wp1},{src: work.wp2}] 
    // },   
    ];

function Media(){
    return (

        <div>
            <Container fluid>
<Cards mediaItems={mediaItems}/>
</Container>
        </div>
    );
}

export default Media;