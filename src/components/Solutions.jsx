import {useState,React} from 'react'
import './Solutions.css'
export default function Solutions() {
  const [content,setContent]=useState("abcd");
  const [heading,setHeading]=useState("ESG & Sustainability");
  const change=(x)=>{
    if(x==1){
      let head="ESG & Sustainability";
      let cntnt="abcdefg";
      setHeading(head);
      setContent(cntnt)
    }
    else if(x==2){
      let head="EcoTrack Cloud";
      let cntnt="abcdefg";
      setHeading(head);
      setContent(cntnt)
    }
    else if(x==3){
      let head="Environment, Health, Safety & Sustainability";
      let cntnt="abcdefg";
      setHeading(head);
      setContent(cntnt)
    }
    else if(x==4){
      let head="Operational Risk Management";
      let cntnt="abcdefg";
      setHeading(head);
      setContent(cntnt)
    }
    else if(x==5){
      let head="Supply Chain Transparency";
      let cntnt="abcdefg";
      setHeading(head);
      setContent(cntnt)
    }
    else if(x==6){
      let head="Product Stewardship";
      let cntnt="abcdefg";
      setHeading(head);
      setContent(cntnt)
    }
    else if(x==7){
      let head="Sustainability Consulting";
      let cntnt="All Solutions";
      setHeading(head);
      setContent(cntnt)
    }
    else if(x==8){
      let head="All Solutions";
      let cntnt="abcdefg";
      setHeading(head);
      setContent(cntnt)
    }
  }
  return (
    <div className="solutions-wrap">
      <div className="solutions-main">
        <div className="sol-menu">
          <div className="m1 sol-menu-m" onClick={()=>{change(1)}}>ESG & Sustainability</div>
          <div className="m2 sol-menu-m" onClick={()=>{change(2)}}>EcoTrack Cloud</div>
          <div className="m3 sol-menu-m" onClick={()=>{change(3)}}>Environment, Health, Safety & Sustainability</div>
          <div className="m4 sol-menu-m" onClick={()=>{change(4)}}>Operational Risk Management</div>
          <div className="m5 sol-menu-m" onClick={()=>{change(5)}}>Supply Chain Transparency</div>
          <div className="m6 sol-menu-m" onClick={()=>{change(6)}}>Product Stewardship</div>
          <div className="m7 sol-menu-m" onClick={()=>{change(7)}}>Sustainability Consulting</div>
          <div className="m8 sol-menu-m" onClick={()=>{change(8)}}>All Solutions</div>
        </div>
        <div className="sol-content">
          <h1>{heading}</h1>
          <div className="sol-hr"></div>
          <div className="sol-content-in">{content}</div>
        </div>
        <div className="sol-sol">
          <h1>Solutions</h1>
        <div className="sol-hr"></div>
        </div>
      </div>
    </div>
  )
}
