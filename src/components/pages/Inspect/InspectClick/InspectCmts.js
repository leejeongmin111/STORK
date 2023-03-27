import "../../../styles/Inspect/InspectClick/InspectCmts.css"



const InspectCmts = ( props) => {
  const{
    sub,
    cmts,
    index,
  }= props;

  function check(){
    console.log(index)
  }

  let sub_style = {};
  if(sub[index] == ""){
    sub_style = {display : "none"};
  }
  return (
    <>
     {/* <div className="inspect-cmts"> */}
    <div className="box_ins_click">
      <b className="b_inspect_cmts" style={sub_style} onClick={check}>{sub[index]}</b>
      <b className="b1_inspect_cmts">
        <p className="p_inspect_cmts">
          {cmts[index]}
        </p>
      </b>
        <div className="inspect-cmts-child" ></div>
      </div>
    {/* </div> */}
    </>
  );
};

export default InspectCmts;
