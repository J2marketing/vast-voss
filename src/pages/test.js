import React from 'react';
import { Cell, Grid } from 'styled-css-grid';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { InnerContainerBoxed } from '../components/InnerContainerBoxed';
import { InnerContainerFull } from '../components/InnerContainerFull';
import { ContactForm } from '../components/ContactForm';
import { COLOR, themeNormal } from '../constants';
import vossIcon from '../assets/vossIcon.png';
import stepOnePic from '../assets/step1.jpg';
import stepTwoPic from '../assets/step2.jpg';
import stepThreePic from '../assets/step3.jpg';
import stepFourPic from '../assets/step4.jpg';

const ThirdPage = () => (
  <Layout>
    <InnerContainerFull id="explanation" textColor={COLOR.VOSS_GREEN} bgColor={COLOR.GREY}>
      <InnerContainerBoxed>
        <h2 className="largeHeader">LOOK AT THIS PAGE</h2>
        <p className="ctaText">ITS PERFECT</p>
      </InnerContainerBoxed>
    </InnerContainerFull>
    <InnerContainerFull textColor={COLOR.VOSS_GREEN} bgColor={COLOR.LIGHTGREY}>
      <InnerContainerBoxed padding="3rem 1rem">
        <Grid columns="repeat(auto-fit,minmax(200px,1fr))" gap="30px">
          <Cell>
            <div>
              <h2>IF YOU THINK</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ligula odio. Nam porta suscipit arcu
                non malesuada. Curabitur tincidunt mauris id nibh ullamcorper blandit eu id est. Phasellus nec pulvinar
                orci, vitae faucibus tortor. Integer ullamcorper lectus non aliquam laoreet. Vestibulum aliquet
                dignissim sapien at laoreet.
              </p>
              <Button theme={themeNormal}>Next</Button>
            </div>
          </Cell>
          <Cell>
            <div>
              <h2>THIS PAGE SUCKS</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ligula odio. Nam porta suscipit arcu
                non malesuada. Curabitur tincidunt mauris id nibh ullamcorper blandit eu id est. Phasellus nec pulvinar
                orci, vitae faucibus tortor.
              </p>
              <Button theme={themeNormal}>Next</Button>
            </div>
          </Cell>
          <Cell>
            <div>
              <h2>FIGHT ME RIGHT NOW.</h2>
              <p>
                Curabitur tincidunt mauris id nibh ullamcorper blandit eu id est. Phasellus nec pulvinar faucibus
                tortor. Integer ullamcorper lectus non aliquam laoreet. Vestibulum aliquet dignissim sapien at laoreet.
              </p>
              <Button theme={themeNormal}>Next</Button>
            </div>
          </Cell>
        </Grid>
      </InnerContainerBoxed>
    </InnerContainerFull>
    <InnerContainerFull isWavyBottomGreen bgColor={COLOR.VOSS_GREEN}>
      <InnerContainerBoxed>
        <h2 className="largeHeader" id="process">
          THE PROCESS
        </h2>
      </InnerContainerBoxed>
    </InnerContainerFull>
    <InnerContainerFull textColor={COLOR.VOSS_GREEN} bgColor={COLOR.LIGHTGREY}>
      <InnerContainerBoxed padding="2rem 1rem">
        <Grid row dense columns="repeat(auto-fit,minmax(200px,1fr))" gap="80px">
          <Cell middle>
            <img className="dropShadow" alt="Step One Pic" src={stepOnePic} />
          </Cell>
          <Cell middle>
            <div>
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
      <InnerContainerBoxed padding="2rem 1rem">
        <Grid row dense columns="repeat(auto-fit,minmax(200px,1fr))" gap="80px">
          <Cell middle className="secondOnMobile">
            <div>
              <h2>STEP 2</h2>
              <p>
                Curabitur tincidunt mauris id nibh ullamcorper blandit eu id est. Phasellus nec pulvinar faucibus
                tortor. Integer ullamcorper lectus non aliquam laoreet. Vestibulum aliquet dignissim laoreet.
              </p>
              <Button theme={themeNormal}>Next</Button>
            </div>
          </Cell>
          <Cell middle className="firstOnMobile">
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
            <div>
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
      <InnerContainerBoxed padding="2rem 1rem">
        <Grid row dense columns="repeat(auto-fit,minmax(200px,1fr))" gap="80px">
          <Cell middle className="secondOnMobile">
            <div>
              <h2>STEP 4</h2>
              <p>
                Curabitur tincidunt mauris id nibh ullamcorper blandit eu id est. Phasellus nec pulvinar faucibus
                tortor. Integer ullamcorper lectus non aliquam laoreet. Vestibulum aliquet dignissim laoreet.
              </p>
              <Button theme={themeNormal} href="/message-sent">
                Next
              </Button>
            </div>
          </Cell>
          <Cell middle className="firstOnMobile">
            <img className="floating dropShadow" alt="Step Four Pic" src={stepFourPic} />
          </Cell>
        </Grid>
      </InnerContainerBoxed>
    </InnerContainerFull>
    <InnerContainerFull id="contact">
      <div className="fullHeader">
        <div className="heroImage">
          <img className="smallLogo" alt="VOSS Oil spill solutions logo" src={vossIcon} />
        </div>
        <ContactForm />
      </div>
    </InnerContainerFull>
    <InnerContainerFull>
      <div className="footerText">
        <img className="footerImg" alt="VOSS Oil spill solutions logo" src={vossIcon} />
        <p>© VAST Oil Spill Solutions Inc.</p>
      </div>
    </InnerContainerFull>
  </Layout>
);

export default ThirdPage;
