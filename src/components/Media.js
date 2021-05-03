import React from 'react';
import Cards from './Cards';
import { Container } from 'react-bootstrap';
import { aesthetica, budget, litWine, notetaker, partie, workout, work } from './images';




const mediaItems = [
    {
        title: "AESTHETICA",
        alt: "aesthetica-app",
        text: "A user friendly and interactive app that bridges fashion and community. Made with Handlebars, MySQL, and third-party API integration.",
        tech: "Node.js, Express, MySQL, Sequelize ORM, Handlebars, Heroku, MVC paridigm, Pexels API",
        url: "https://secure-ocean-28347.herokuapp.com/",
        images: [{ src: aesthetica.a }, { src: aesthetica.b }, { src: aesthetica.c }, { src: aesthetica.d }]
    },
    {
        title: "PARTIE APP",
        alt: "partie-app-react",
        text: "A MERN Stack + Material-UI Framework app to keep track of upcoming events, the budget, to-do's, invoices and RSVPs.",
        tech: "MERN Stack, SendGrid, Material-UI Framework",
        url: "https://powerful-fortress-17827.herokuapp.com/",
        images: [{ src: partie.p1 }, { src: partie.p2 }, { src: partie.p3 }, { src: partie.p4 }, { src: partie.p5 }]
    },
    {
        title: "LIT & WINE",
        alt: "litwine-app",
        text: "A simple HTML5/CSS/JS recommendation engine that helps avid readers pair their choice of genre or author with a corresponding wine using third-party API integration.",
        tech: "HTML5, CSS, JavaScript, Open Weather Map API, GoogleBooks API, NYT Book Review API ",
        url: "https://dianalrs.github.io/Lit-Wine/",
        images: [{ src: litWine.wine1 }, { src: litWine.wine2 }, { src: litWine.wine3 }]
    },
    {
        title: "WORKOUT TRACKER",
        alt: "workout-app",
        text: "This Express + MongoDB fitness app allows users to add new workouts and update exsisting workouts along with a visual display to track progress. ",
        tech: "MongoDB, Mongoose, Node.js, Express, Morgan",
        url: "https://thawing-stream-39370.herokuapp.com/?id=6045246bd70c8a0017ad4114",
        images: [{ src: workout.w1 }, { src: workout.w2 }, { src: workout.w3 }, { src: workout.w4 }, { src: workout.w5 }]
    },
    {
        title: "BUDGET TRACKER",
        alt: "budget-app",
        text: "A useful PWA app for travellers to track their expenses both online and offline.",
        tech: "Node.js, Express, MongoDB, Mongoose",
        url: "https://nameless-falls-93842.herokuapp.com/",
        images: [{ src: budget.bgt1 }, { src: budget.bgt2 }]
    },
    {
        title: "NOTE TAKER APP",
        alt: "note-taker-app",
        text: "A MongoDB and Mongoose based app to write, save, edit, and delete notes with a clean and user friendly interface",
        tech: "Node.js, Express, Path, fs",
        url: "https://desolate-inlet-44144.herokuapp.com/",
        images: [{ src: notetaker.note1 }, { src: notetaker.note2 }, { src: notetaker.note3 }]
    },
    // {
    //     title: "WORKDAY PLANNER",
    //     alt: "work-planner-app",
    //     text: "this is the description",
    //     tech: "this is the tech stuff",
    //     url: " https://dianalrs.github.io/Work-Planner/",
    //     images: [{ src: work.wp1 }, { src: work.wp2 }]
    // },
];

function Media() {
    return (

        <div>
            <Container fluid className="card-container">
                <Cards mediaItems={mediaItems} />
            </Container>
        </div>
    );
}

export default Media;