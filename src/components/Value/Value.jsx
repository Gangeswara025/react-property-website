import React, { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './Value.css'
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from '../../utils/accordion';

export default function Value() {
  const [expandedUuids, setExpandedUuids] = useState([0]);

  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>

        <div className="flexColStart v-right">
          <span className='orangeText'>Our Values</span>
          <span className='primaryText'>Value We Give to You</span>
          <span className='secondaryText'>
            We always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better.
          </span>

          <Accordion
          className='accordion'
          allowMultipleExpanded={false}
          preExpanded={[0]}
          onChange={(uuids) => setExpandedUuids(uuids)}
          >
            {
              data.map((item, i)=> {
                return (
                  <AccordionItem className={`accordionItem ${expandedUuids.includes(i) ? "expanded" : "collapsed"}`} key={i} uuid={i}>
                    <AccordionItemHeading>
                      <AccordionItemButton className='flexCenter accordionButton'>
                        <div className="flexCenter icon">{item.icon}</div>
                        <span className='primaryText'>{item.heading}</span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                )
              })
            }
          </Accordion>
        </div>
      </div>
    </section>
  )
}
