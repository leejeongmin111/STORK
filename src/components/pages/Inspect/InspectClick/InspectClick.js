import "../../../styles/Inspect/InspectClick/InspectClick.css"
import _icon_arrow_ios_back_click from "../../../../assets/svg/Inspect/InspectClick/_icon_arrow_ios_back_click.svg";
import _icon_arrow_ios_forward_click from "../../../../assets/svg/Inspect/InspectClick/_icon_arrow_ios_forward_click.svg";
import InspectCmts from "./InspectCmts";
import Header from "../../Bar/Header";
import Footer from "../../Bar/Footer";
import Data from "../../../data/Inspect_Data";

import { useLocation } from 'react-router-dom';
import { useState } from "react";

const InspectClick = () => {

  const [num,setNum] =useState(0);

  const location = useLocation();
  const temp_title = location.state;

  let info;
  for(let i = 0 ; i < Data.length ; i ++){

    for(let j = 0 ; j < Data[i][1].length ; j++){
      // console.log("title",Data[i][1][j].title);
      if(Data[i][1][j].title == temp_title){
        info = Data[i][1][j];
      }
    }
  }

  let arrow_style;
  if(info.div == "검사"){
    arrow_style = {display : 'none'}
  }else{
    arrow_style = {display : 'block'}
  }

  function next_num (){
    if(num >= info.subtitle.length -1){
      setNum(0);
    }else{
      setNum(num+1);
    }
  }

  function pre_num() {
    if(num <= 0){
      setNum(info.subtitle.length-1);
    }else{
      setNum(num-1);
    }
  }


  function check (){
    // console.log(temp_title)
    // console.log(Data[0][1][2].title);
    // console.log(temp_title)
    // console.log(info.subtitle[0])
    console.log(info)

  }

  return (
  <>
    <Header/>
    <div className="inspect-click">
      <div className="empty_box_inspect_click"></div>
      <div className="parent_inspect_click">
        <div className="div_inspect_click" >{info.title}</div>
        <div className="ins_total_cmts">
        <b className="b2_inspect_click" onClick={check}>{info.div=="증상"?info.subtitle[num]:info.title}</b>
        <img
          className="icon-arrow-ios-back_inspect_click"
          alt=""
          src={_icon_arrow_ios_back_click}
          onClick = {pre_num}
          style = {arrow_style}
        />
        <img
          className="icon-arrow-ios-forward_inspect_click"
          alt=""
          src={_icon_arrow_ios_forward_click}
          onClick= {next_num}
          style = {arrow_style}
        />
        { 
          info.sub[num].map((arr,index)=>{
              return(
              <>
              <InspectCmts index = {index}  sub = {info.sub[num]} cmts = {info.cmts[num]}/>
              
              </>)
              // }else if(info.div == "검사"){
                //   return(<>
                //           <InspectCmts index = {0} sub = {info.subtitle[0]} cmts = {info.cmts}/>
                //           <InspectCmts index = {1} sub = {info.subtitle[0]} cmts = {info.cmts}/>
                //          </>);
                // }
              })
            }
            </div>
        </div>
    </div>
        <div style={{height : "60px"}}></div>
    <Footer />
    </>
  );
};

export default InspectClick;
