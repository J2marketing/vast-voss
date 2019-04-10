import React from 'react';
import { Cell, Grid } from 'styled-css-grid';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { transparent, COLOR, themeNormal } from '../constants';
import vossLogo from '../assets/vossHeaderLogo.png';
import stepOnePic from '../assets/step1.jpg';
import stepTwoPic from '../assets/step2.jpg';
import stepThreePic from '../assets/step3.jpg';
import stepFourPic from '../assets/step4.jpg';
import { InnerContainerBoxed } from '../components/InnerContainerBoxed';
import { InnerContainerFull } from '../components/InnerContainerFull';

const IndexPage = () => (
  <Layout>
    <InnerContainerFull>
      <div className="fullHeader">
        <div className="heroImage">
          <img alt="VOSS Oil spill solutions logo" src={vossLogo} />
        </div>
        <div className="buttonCTAs">
          <Button themeBtn={transparent}>Explore Solutions</Button>
          <Button themeBtn={transparent}>Our Company</Button>
        </div>
      </div>
    </InnerContainerFull>
    <InnerContainerFull bgColor={COLOR.VOSS_GREEN_LIGHT}>
      <InnerContainerBoxed padding="5rem 1rem">
        <Grid columns="repeat(auto-fit,minmax(200px,1fr))" gap="30px">
          <Cell>
            <div>
              <h2>CHEAPER</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ligula odio. Nam porta suscipit arcu
                non malesuada. Curabitur tincidunt mauris id nibh ullamcorper blandit eu id est. Phasellus nec pulvinar
                orci, vitae faucibus tortor. Integer ullamcorper lectus non aliquam laoreet. Vestibulum aliquet
                dignissim sapien at laoreet.
              </p>
            </div>
          </Cell>
          <Cell>
            <div>
              <h2>CLEANER</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ligula odio. Nam porta suscipit arcu
                non malesuada. Curabitur tincidunt mauris id nibh ullamcorper blandit eu id est. Phasellus nec pulvinar
                orci, vitae faucibus tortor.
              </p>
            </div>
          </Cell>
          <Cell>
            <div>
              <h2>FASTER</h2>
              <p>
                Curabitur tincidunt mauris id nibh ullamcorper blandit eu id est. Phasellus nec pulvinar faucibus
                tortor. Integer ullamcorper lectus non aliquam laoreet. Vestibulum aliquet dignissim sapien at laoreet.
              </p>
            </div>
          </Cell>
        </Grid>
      </InnerContainerBoxed>
    </InnerContainerFull>
    <InnerContainerFull isWavyBottomGreen bgColor={COLOR.VOSS_GREEN}>
      <InnerContainerBoxed>
        <h2 className="largeHeader">THE PROCESS</h2>
      </InnerContainerBoxed>
    </InnerContainerFull>
    <InnerContainerFull textColor={COLOR.VOSS_GREEN} bgColor={COLOR.LIGHTGREY}>
      <InnerContainerBoxed padding="2rem 1rem">
        <Grid row dense columns="repeat(auto-fit,minmax(200px,1fr))" gap="80px">
          <Cell middle>
            <img className="floating dropShadow" alt="Step One Pic" src={stepOnePic} />
          </Cell>
          <Cell middle>
            <div  >
              <h2>STEP 1</h2>
              <p>
                Curabitur tincidunt mauris id nibh ullamcorper blandit eu id est. Phasellus nec pulvinar faucibus
                tortor. Integer ullamcorper lectus non aliquam laoreet. Vestibulum aliquet dignissim laoreet.
              </p>
              <Button theme={themeNormal}>Next</Button>
            </div>
          </Cell>
        </Grid>
      </InnerContainerBoxed>
    </InnerContainerFull>
    <InnerContainerFull isWavyTopGrey isWavyBottomGrey textColor={COLOR.VOSS_GREEN} bgColor={COLOR.GREY}>
      <InnerContainerBoxed padding="8rem 1rem">
        <Grid row dense columns="repeat(auto-fit,minmax(200px,1fr))" gap="80px">
          <Cell middle>
            <div  >
              <h2>STEP 2</h2>
              <p>
                Curabitur tincidunt mauris id nibh ullamcorper blandit eu id est. Phasellus nec pulvinar faucibus
                tortor. Integer ullamcorper lectus non aliquam laoreet. Vestibulum aliquet dignissim laoreet.
              </p>
              <Button theme={themeNormal}>Next</Button>
            </div>
          </Cell>
          <Cell middle>
            <img className="floating dropShadow" alt="Step Two Pic" src={stepTwoPic} />
          </Cell>
        </Grid>
      </InnerContainerBoxed>
    </InnerContainerFull>
    <InnerContainerFull textColor={COLOR.VOSS_GREEN} bgColor={COLOR.LIGHTGREY}>
      <InnerContainerBoxed padding="2rem 1rem">
        <Grid row dense columns="repeat(auto-fit,minmax(200px,1fr))" gap="80px">
          <Cell middle>
            <img className="floating dropShadow" alt="Step Three Pic" src={stepThreePic} />
          </Cell>
          <Cell middle>
            <div  >
              <h2>STEP 3</h2>
              <p>
                Curabitur tincidunt mauris id nibh ullamcorper blandit eu id est. Phasellus nec pulvinar faucibus
                tortor. Integer ullamcorper lectus non aliquam laoreet. Vestibulum aliquet dignissim laoreet.
              </p>
              <Button theme={themeNormal}>Next</Button>
            </div>
          </Cell>
        </Grid>
      </InnerContainerBoxed>
    </InnerContainerFull>
    <InnerContainerFull isWavyTopGrey textColor={COLOR.VOSS_GREEN} bgColor={COLOR.GREY}>
      <InnerContainerBoxed padding="8rem 1rem">
        <Grid row dense columns="repeat(auto-fit,minmax(200px,1fr))" gap="80px">
          <Cell middle>
            <div  >
              <h2>STEP 4</h2>
              <p>
                Curabitur tincidunt mauris id nibh ullamcorper blandit eu id est. Phasellus nec pulvinar faucibus
                tortor. Integer ullamcorper lectus non aliquam laoreet. Vestibulum aliquet dignissim laoreet.
              </p>
              <Button theme={themeNormal}>Next</Button>
            </div>
          </Cell>
          <Cell middle>
            <img className="floating dropShadow" alt="Step Four Pic" src={stepFourPic} />
          </Cell>
        </Grid>
      </InnerContainerBoxed>
    </InnerContainerFull>
    <InnerContainerFull>
      <div className="fullHeader">
        <div className="heroImage">
          <img alt="VOSS Oil spill solutions logo" src={vossLogo} />
        </div>
        <form method="POST" action="/page-2" data-netlify="true" netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <div className="field half first">
            <label htmlFor="name">
              Name
              <input type="text" name="name" id="name" />
            </label>
          </div>
          <div className="field half">
            <label htmlFor="email">
              Email
              <input type="email" name="email" id="email" />
            </label>
          </div>
          <div className="field">
            <label htmlFor="message">
              Message
              <textarea name="message" id="message" rows="6" />
            </label>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
        </form>
      </div>
    </InnerContainerFull>
  </Layout>
);

export default IndexPage;
