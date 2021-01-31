import React from "react";
import "./InstaEmbed.css";
import CopyrightIcon from '@material-ui/icons/Copyright';
import { Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  
    large: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
  
   
  }));

function InstaEmbed() {

    const classes = useStyles();


  return (
    <div className="instaEmbed">
      <img src="/images/header2.png" className="embed_image" />
      <div className="embedText">
        <h4>Hello Amigos 👋 !!!</h4>
        <h4>Welcome to Our App MUMBLE ⚡ !!!</h4>

        <p>
        ❣Special Thanks to ♡Anubav♡Aditya♡Ankita♡ (The Creator of The App)Happy Mumbly❣
          <br />
          <br />
          <b>P❤S❤</b> This project has been developed for learning and Entertainment purposes, and it has nothing to do with the other Application™
          <br />
          <br />
          <b>❤Features : </b>
          <ul>
            <li>User Authentication : Sign In and Sign Up</li>
            <li>Image Uploading for creating new Posts</li>
            <li>User can add Comments to the Posts</li>
            <li>You Can Chat with Anonnymous people</li> 
            <li>An Awesome User-Interface</li>
          </ul>
          <br />
        </p>
        <h4>❥ Hope you have a great time, exploring our application in and out ✌ ❥</h4>
      </div>

      <div className="footer">
        <Avatar
          className="avatar"
          alt="Mumble"
          src="/images/avatar.jpg"
          className={classes.large}
        />

        <div className="footer_content" >
            <h5>Aditya Nayak</h5>
            <a href="https://www.instagram.com/Aditya_Nayak_7/"><Button variant="contained" color="secondary" className="footer_follow" >Follow</Button></a>
        </div>

        <div className="footer_content" >
            <h5>Ankita Mohanty</h5>
            <a href="https://www.instagram.com/mohanty.ankita12/"><Button variant="contained" color="secondary" className="footer_follow" >Follow</Button></a>
        </div>

        <div className="footer_content" >
            <h5>Anubhav Parida</h5>
            <a href="https://www.instagram.com/02_shrinking_violet/"><Button variant="contained" color="secondary" className="footer_follow" >Follow</Button></a>
        </div>

        
      </div>
      <div className="copyright">
            <CopyrightIcon fontSize="small" className="copyright_icon" />❤ A Happy Mumble To You ❤
      </div>
    </div>
  );
}

export default InstaEmbed;
