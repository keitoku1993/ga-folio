import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pic9 from '../assets/images/pic09.jpg';
import Scroll from '../components/Scroll';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'skills', name: 'Skills', icon: 'fa-cogs' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: block;
  }
`;

const AboutMyImage = styled.div`
  display: flex;
  flex: 1;
  border-radius: 10%;
  overflow: hidden;
  max-width: 270px;
  min-width: 250px;
  margin-right: 40px;
  @media (max-width: 768px) {
    width: 60%;
    margin: 0 auto 28px;
    min-width: auto;
  }
`;

const AboutText = styled.div`
  flex: 2;
  text-align: left;
  font-size: 16px;
  line-height: 2;
  @media (max-width: 768px) {
    line-height: 1.5;
    font-size: 13px;
  }
`;

const PaddingTop = styled.div`
  padding-top: 24px;
  @media (max-width: 768px) {
    padding-top: 14px;
  }
`;

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">I'm @keitoku1993</h2>
            <h2>Web Frontend Developer</h2>
            <p>
              I've made few things,
              <br /> please check it out!
            </p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Show me!
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="about" className="two">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <AboutContainer>
            <AboutMyImage>
              <img style={{ width: '100%' }} src={pic9} alt="" />
            </AboutMyImage>

            <AboutText>
              初めまして、東京都在住の徳永と申します。
              <br />
              新卒からITの世界に飛び込み、現在3年目(2社目)になります。
              <PaddingTop>
                1社目では大手証券系Sierで主にシステム設計とPMO業務を経験しました。
                <br />
                そして現職では、HTML/CSSを使った基本的なマークアップから、JavaScriptでの複雑なUIやログの実装など、フロントエンド全般の開発を生業としています。
              </PaddingTop>
              <PaddingTop>
                理系出身ということもあり、とにかくモノづくりが好きで土日のどちらかは一日中個人開発をしていることがほとんどです。最近はフロントエンドにとどまらず、バックエンドの知識も積極的に蓄えています。
              </PaddingTop>
              <PaddingTop>
                若輩者ではありますが、お互いの求めるモノがマッチすれば、ぜひ一緒にお仕事をさせて頂ければと思います！
              </PaddingTop>
            </AboutText>
          </AboutContainer>
        </div>
      </section>

      <section id="skills" className="three">
        <div className="container">
          <header>
            <h2>Skills</h2>
          </header>

          <p>
            Life will feel it is always a great need for eu valley, the valley
            CNN ridiculous smile at any time chat mainstream clinical homes.
            Mauris floor was very warm and we need it. One customer now nibh
            Bureau dark pools behavior.
          </p>
        </div>
      </section>

      <section id="portfolio" className="four">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>

          <p>
            Life will feel it is always a great need for eu valley, the valley
            CNN ridiculous smile at any time chat mainstream clinical homes.
            Mauris floor was very warm and we need it. One customer now nibh
            Bureau dark pools behavior.
          </p>
        </div>
      </section>

      <section id="contact" className="five">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>

          <form method="post" action="#">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;