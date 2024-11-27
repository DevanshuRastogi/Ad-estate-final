import React from "react";
import Policy from "../../component/privacy/policy"

import { Container, Grid} from "@mui/material";
import Header from "../../component/header";
import Footer from "../../component/footer";
import Banner from "../../component/banner";

const PrivacyPage = () => {
  return (
    <>
    <Header />
      


    <Banner title="Privacy Notice"/>
        <section className="writing_content">
          <Container>
            <Grid container>
              <Grid item lg={12} md={12} sm={12} xs={12}>
            <div className="content_main">

            <Policy />
            </div>
              </Grid>
            </Grid>
          </Container>
        </section>
      <Footer />
    </>
  );
};

export default PrivacyPage;