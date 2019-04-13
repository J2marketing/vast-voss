import { createGlobalStyle } from 'styled-components';
import { darken, rgba } from 'polished';
import vossBgHeaderDarkNoBoat from '../../assets/vossBgHeaderDarkNoBoat.jpg';
import { COLOR } from '../../constants';

/* normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
const normalize = `
  html{line-height:1.15;-webkit-text-size-adjust:100%}
  body{margin:0}
  main{display:block}
  h1{font-size:2em;margin:.67em 0}
  hr{box-sizing:content-box;height:0;overflow:visible}
  pre{font-family:monospace,monospace;font-size:1em}
  a{background-color:transparent}
  abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}
  b,strong{font-weight:bolder}
  code,kbd,samp{font-family:monospace,monospace;font-size:1em}
  small{font-size:80%}
  sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}
  sub{bottom:-.25em}
  sup{top:-.5em}
  img{border-style:none}
  button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}
  button,input{overflow:visible}
  button,select{text-transform:none}
  [type=button],[type=reset],[type=submit],button{-webkit-appearance:button}
  [type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}
  [type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}
  fieldset{padding:.35em .75em .625em}
  legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}
  progress{vertical-align:baseline}
  textarea{overflow:auto}
  [type=checkbox],[type=radio]{box-sizing:border-box;padding:0}
  [type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}
  [type=search]{-webkit-appearance:textfield;outline-offset:-2px}
  [type=search]::-webkit-search-decoration{-webkit-appearance:none}
  ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}
  details{display:block}
  summary{display:list-item}
  template{display:none}
  [hidden]{display:none}
`;

const headerStyle = `
  margin: 0;
  margin-bottom: 1rem;
  font-weight: 700;
`;

export const ResetStyle = createGlobalStyle`
  ${normalize}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: ${COLOR.BLACK};
  }

  body {
    @import url('https://fonts.googleapis.com/css?family=Lato:400,900');
    font-family: 'Lato', sans-serif;
    background: ${COLOR.LIGHTGREY};
  }

  h1 {
    ${headerStyle}
    font-size: 2.441rem;
  }

  h2 {
    ${headerStyle}
    font-size: 1.953rem;
  }

  h3 {
    ${headerStyle}
    font-size: 1.563rem;
  }

  h4 {
    ${headerStyle}
    font-size: 1.25rem;
  }

  h5 {
    ${headerStyle}
    font-size: 1rem;
  }

  h6 {
    ${headerStyle}
    font-size: 0.8rem;
  }
  img{
    max-width:100%;
    align-self:center;
  }
  p {
    margin-bottom: 1rem;
  }

  a {
    background-color: transparent;
    color: ${COLOR.BLUE};
    text-decoration: none;

    &:focus,
    &:hover {
      color: ${darken(0.2, COLOR.BLUE)};
    }
  }

  ul, ol {
    margin-bottom: 1rem;
    padding-left: 2rem;

    ul, ol {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }

  hr {
    margin: 1rem 0;
    height: 0.2rem;
    background: ${rgba(COLOR.BLACK, 0.15)};
    border: none;
  }

  blockquote {
    margin: 0 0 1rem 1rem;
    padding: 0.25rem 0 0.25rem 1rem;
    border-left: 0.2rem solid ${rgba(COLOR.BLACK, 0.15)};

    p:last-child {
      margin-bottom: 0;
    }
  }

  code {
    padding: 0.05rem 0.4rem;
    background-color: ${rgba(COLOR.BLACK, 0.075)};
  }

  pre {
    margin: 0;
    margin-bottom: 1rem;
    padding: 1rem;
    background-color: ${rgba(COLOR.BLACK, 0.075)};
    font-size: 0.8rem;

    code {
      padding: 0;
      background-color: transparent;
    }
  }

  .largeHeader{
    text-align:center;
    font-size:3.2em;
  }

  @media only screen and (max-width: 500px){
    .largeHeader{
      font-size:2.3em;
    }
  }

  .smallLogo{
    max-width:150px;
    margin:0.2rem 0.2rem 0.2rem 0.5rem; 
  }

  .footerImg{
    max-width:2rem;
    margin:0.2rem 0.2rem 0.2rem 0.5rem; 
  }

  .dropShadow{
    box-shadow: 10px 10px 20px ${darken(0.2, COLOR.GREY)};
  }

  .ctaText{
    text-align:center;
    font-size:1.4rem;
  }

  .fullHeader{
    min-height:90vh;
    transition: min-height 20000s steps(1);
    background-image: url(${vossBgHeaderDarkNoBoat});
    background-size: cover;
    background-position: center;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
  }
  .fullHeader .headerLogo{
    max-width:50vw;
    @media only screen and (max-width:980px){
      max-width:80vw;
    }
  }
  .buttonCTAs{
    display:flex;
    & *{
      margin:10px;
    }
    @media only screen and (max-width:580px){
      flex-direction:column;
      max-width:70vw;
    }
  }
  .footerText{
    display:flex;
    align-items:center;
    justify-content:center;
    & p{
      margin-bottom:0px;
    }
  }
  .debug{
    background-color:red;
  }
`;
