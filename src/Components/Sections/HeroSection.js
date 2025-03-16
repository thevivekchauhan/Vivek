import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import TicTacToe from "../TikTok";
import myResume from "../assets/Vivek_Chauhan_resume.pdf";

export default function HeroSection() {
  return (
    <div className="MySection justify-content-center" id="profile">
      <div className=" heroSection  text-center">
        <div className="row align-items-center justify-content-between ">
          <div className="col-md-6 text-start">
            <span className="subTitle"> Hi, I am</span>
            <h1 className="Title"> Vivek Chauhan</h1>
            <h2 className="subTitleBottom">{">"} Front-end developer</h2>
            <div className="codeHero mt-5">
              <SyntaxHighlighter language="javascript" style={dracula}>
                // complete/skip the game to continue website
              </SyntaxHighlighter>
              <SyntaxHighlighter language="javascript" style={dracula}>
                // you can also see it on my Github page
              </SyntaxHighlighter>
              <SyntaxHighlighter
                className="mt-2"
                language="javascript"
                style={dracula}
              >
                const githubLink = "https://github.com/thevivekchauhan"
              </SyntaxHighlighter>
            </div>
            <div className="myLinks gap-3 d-flex mt-5">
              <a
                href={myResume}
                className="btn solidBtn solidBig"
                target="_blank"
                rel="noopener noreferrer"
              >
                _resume <i className="bi bi-file-earmark-person-fill"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/thevivekchauhan/"
                className="btn solidBtn solidBig"
                 target="_blank"
                rel="noopener noreferrer"
              >
                _linkedIn <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 text-end gameToe justify-content-center d-flex">
            <TicTacToe></TicTacToe>
          </div>
        </div>
      </div>
    </div>
  );
}
