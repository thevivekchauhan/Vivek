import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { SplineScene } from "./SplineScene";
import { Card } from "./Card";
import { Spotlight } from "./Spotlight";
import myResume from "../assets/Vivek-Resume.pdf";

export default function HeroSection() {
  return (
    <Card className="w-100 h-auto bg-black position-relative overflow-hidden p-0" style={{ minHeight: 400 }}>
      <Spotlight className="position-absolute start-0 top-0" />
      <div className="d-flex flex-column flex-md-row h-100">
        {/* Left content */}
        <div className="flex-fill p-4 p-md-5 d-flex flex-column justify-content-center z-1">
          <span className="subTitle"> Hi, I am</span>
          <h1 className="Title"> Vivek Chauhan</h1>
          <h2 className="subTitleBottom">{">"} Front-end developer</h2>
          <div className="codeHero mt-4">
            <SyntaxHighlighter language="javascript" style={dracula}>
              // complete/skip the game to continue website
            </SyntaxHighlighter>
            <SyntaxHighlighter language="javascript" style={dracula}>
              // you can also see it on my Github page
            </SyntaxHighlighter>
            <SyntaxHighlighter className="mt-2" language="javascript" style={dracula}>
              {/* const githubLink = "https://github.com/thevivekchauhan" */}
            </SyntaxHighlighter>
          </div>
          <div className="myLinks gap-3 d-flex mt-4 flex-wrap">
            <a href={myResume} className="btn solidBtn solidBig" target="_blank" rel="noopener noreferrer">
              _resume <i className="bi bi-file-earmark-person-fill"></i>
            </a>
            <a href="https://www.linkedin.com/in/thevivekchauhan/" className="btn solidBtn solidBig" target="_blank" rel="noopener noreferrer">
              _linkedIn <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
        {/* Right content */}
        <div className="flex-fill d-flex align-items-center justify-content-center position-relative" style={{ minHeight: 300 }}>
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-100 h-100"
          />
        </div>
      </div>
    </Card>
  );
}
