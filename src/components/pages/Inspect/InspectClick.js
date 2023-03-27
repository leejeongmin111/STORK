import "../../styles/Inspect/InspectClick.css"
import InspectSubtitle from "./InspectSubtitle";
import InspectSub from "./InspectSub";
import InspectCmts from "./InspectCmts";

const InspectClick = () => {
  return (
    <>
    <div className="inspect-click">
      <b className="b_ins_title">왜 진통이 올까?</b>
    </div>
      <InspectSubtitle />
      <InspectSub />
      <InspectCmts />
    </>
  );
};

export default InspectClick;
