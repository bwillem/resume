import React, { Component } from 'react';
import { Box, Flex } from 'grid-styled';
import { 
  ExpandingLine,
} from './uiComponents';
import t from 'tachyons';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Flex className='h-screen'>
          <Box className='pa2 pa5-ns vc text-grey'>
            <span className='f6-ns ttu tracked white bg-light-purple ph2 pv1 ml1-l br1 dn di-l'>new and improved!</span>
            <h1 className='f-headline-l f1-m mt4 mb0'>bryan willem <span role='img' aria-label='unicorn'>🦄</span></h1>
            <h2 className='f1-l f3-m'>UI engineer based in Kelowna, BC</h2>
            <ExpandingLine />
            <a className="o-80 pl0 pr5 pt3 pb2 dib fw-700 text-decoration-none c-inherit" href="https://github.com/bwillem">
              <img className="dib w-1em h-1em m0 fs4" src="https://icon.now.sh/github/111" width='24px'/>
            </a>
            <a className="o-80 pl0 pr5 pt3 pb2 dib fw-700 text-decoration-none c-inherit" href="https://twitter.com/bwguenther">
              <img className="dib w-1em h-1em m0 fs4" src="https://icon.now.sh/twitter/111" width='24px'/>
            </a>
            <a className="o-80 pl0 pr5 pt3 pb2 dib fw-700 text-decoration-none c-inherit" href="https://dribbble.com/bryan-willem">
              <img className="dib w-1em h-1em m0 fs4" src="https://icon.now.sh/dribbble/111" width='24px'/>
            </a>
          </Box>
        </Flex>
        <Flex className='bg-washed-blue pa3 pa5-ns text-grey'>
          <Box>
            <h2 className='f6 ttu tracked'>about</h2>
            <p className='f2 near-black lh-copy measure'>
              Working toward a beautiful and usable internet.
            </p>
            {/* <p className='f5 f4-ns lh-copy measure'>
              Two things really stuck with me after University: computer science and Modernism.
              Turns out product design and development marry these pretty conveniently. 
            </p> */}
            <p className='f5 f4-ns lh-copy measure'>
              I started messing with code and learning how the web works as a teenager. 
              I developed an appetite for learning about programming and it hasn't faded.
            </p>
            <p className='f5 f4-ns lh-copy measure'>
              I started with static web pages in 2012, in 2013 started full time Wordpress development.
              From here my interests shifted to software, where I worked with FreshGrade
              on their web and mobile apps for over a year. While I never lost my passion for
              design, my focus now is product development.
            </p>
            <p className='f5 f4-ns lh-copy measure'>
              {/* Modernism is the progenitor of UI design. A lot of work was done developing visual principles,
              a lot of stuff that translates directly to the web. Grids, line heights, line length, text
              sizes, vertical rhythm, these were all studied and worked with in depth by people like Joseph Müller-Brockman, Max Bill,
              Wim Crouwel, the Swiss typographers and their contemporaries. */}
              {/* To me philosophy of mind and its subsidiaries pose significant questions. Questions that are both 
              fundamental to understanding ourselves and intellectually quite complex. Using neuroscience - empirical data - to
              try to understand the human mind on its own terms - this seemed like a really powerful and exciting discipline. */}
            </p>
            {/* <p className='f5 f4-ns lh-copy measure'>
              Philosophy of mind tries to uncover the mechanisms of cognition. What does it mean to understand something?
              Can we identify limits of cognition? Sometimes I can't help but feel a theory of mind is impossible -
              studying it is toiling at the border of cognition itself - a border we're not capable of crossing. This might
              just be a cognitive limit.
            </p>
            <p className='f5 f4-ns lh-copy measure'>
              Art and design are products of this mind - they describe it. Design documents are maps of cognition.
              The International style, de stilj, Swiss and Dutch typographic patterns, these are examples of rational,
              sober sytems being used in art and design. To me these movements represent a breakthrough
              in Logic. If design really does map cognition, Modernism is a cultural and intellectual accomplishment
              on the scale of the Copernican revolution. Modernism isn't men in round glasses using rulers, it's human reason
              coming to terms with itself, discovering what cognition is capable of, and toiling on its border.
            </p> */}
            {/* <p className='f5 f4-ns lh-copy measure'>
              Art began to implode a bit after world war 2. The culture it used to depict was betraying it on all fronts.
              Artists dismissed logic for experience. Meaning was no longer an intrinsic part of artworks - logic,
              which built the bomb, now seemed uninteresting and dangerous. Art turned in on itself, became insistently
              academic and self-referential. Math and physics only referenced the world in its own terms, why shouldn't
              art?
            </p> */}
            {/* <p className='f5 f4-ns lh-copy measure'>
              What are the conditions of the cogntive atmosphere that allowed Modernism to exist? Is a computational
              model of mind useful here? This occupied a big chunk of my time and energy.
              When I graduate I decided to leave these questions to smarter people and started studying computer science.
              I have yet to come up with a theory of mind but I can compose a mean React app.
            </p> */}
            {/* <p className='f5 f4-ns lh-copy measure'>
              Now I spend most of my time building internets. I love problem solving in both UI design and programming
              (sometimes both at the same time). My current stack of choice is some flavour of react, redux, 
              and a node backend. I believe in the power of design systems, both aesthetic and programmatic,
              which is why I like typesafety and organize my books based on height.
            </p> */}
          </Box>
        </Flex>
        <Flex className='bg-washed-green pa3 pa5-ns'>
          <Box>
            <h2 className='f6 ttu tracked'>experience</h2>
            
            <h3 className="f1 mb0">Giftery</h3>
            <p className="ttu racked">product designer, developer, co-founder</p>
            <p className='f5 f4-ns lh-copy measure'>
              Giftery is an intelligent gift recommendation engine.
              After winning Kelowna Startup Weekend 2017 we're hustling to release this product by September.
            </p>
            <p className='f5 f4-ns lh-copy measure'>
              Currently working on product design and building out a scalable design system - 
              both theoretical and technical (library of React components). Next up: API design and data architecture.
            </p>
            <p className='f5 f4-ns lh-copy measure'>
              <span aria-label='link' role='img'>🖇</span><a className='link dim text-grey' href='https://giftery.co' target='_blank'> giftery.co</a>
            </p>
  
            <h3 className='f1 mt6 mb0'>FreshGrade</h3>
            <p className='ttu tracked'>developer</p>
            <p className='f5 f4-ns lh-copy measure'>
              Working on the web client as well as Cordova iOS and Android applications.
              Fixing bugs, building features, working toward a typesafe, maintainable and scalable codebase.
              FreshGrade engineers stand by 100% code coverage and comprehensive end-to-end testing.
            </p>
            <p className='f5 f4-ns lh-copy measure'>
              Technologies used at this company include but are not limited to Backbone, Marionette, Typescript, Cordova,
              Express, ES6, React, React Native, Mocha, Chai, Sinon.
            </p>
            <p className='f5 f4-ns lh-copy measure'>
              <span role='img' aria-label='link'>🖇</span><a className='link dim text-grey' href='https://freshgrade.com' target='_blank'> freshgrade.com</a> and <a className='link dim text-grey' href='https://app.freshgrade.com' target='_blank'>app.freshgrade.com</a>
            </p>

            <h3 className='f1 mt6 mb0'>
              GetOn
            </h3>
            <p className="tracked ttu">web designer and developer</p>
            <p className='f5 f4-ns lh-copy measure'>
              Branding, logo design, product design, Wordpress development.
            </p>
            <p className='f5 f4-ns lh-copy measure'>
              <span role='img' aria-label='link'>🖇</span><a className='link dim text-grey' href='http://geton.com/client-list' target='_blank'>geton.com</a>
            </p>
          </Box>
        </Flex>

        <Flex>
          <Box className='pa3 pa5-ns gray'>
            <h3 className='f6 ttu tracked'>© bryan willem guenther 2017</h3>
            <h3 className='f6 ttu tracked'>MADE WITH REACT, STYLED-COMPONENTS, TACHYONS</h3>
            <h3 className='f6 ttu tracked'>bguenther3@gmail.com</h3>
            <a className="o-50 pl0 pr4 pt4 pb4 dib fw-700 text-decoration-none c-inherit" href="https://github.com/bwillem">
              <img className="dib w-1em h-1em m0 fs4" src="https://icon.now.sh/github/111" width='24px'/>
            </a>
            <a className="o-50 pa4 dib fw-700 text-decoration-none c-inherit" href="https://twitter.com/bwguenther">
              <img className="dib w-1em h-1em m0 fs4" src="https://icon.now.sh/twitter/111" width='24px'/>
            </a>
            <a className="o-50 pa4 dib fw-700 text-decoration-none c-inherit" href="https://dribbble.com/bryan-willem">
              <img className="dib w-1em h-1em m0 fs4" src="https://icon.now.sh/dribbble/111" width='24px'/>
            </a>           
          </Box>
        </Flex>
      </div>
    );
  }
}

export default App;
