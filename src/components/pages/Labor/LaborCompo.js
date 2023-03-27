import labor_inner_labor from "../../../assets/svg/Labor/LaborCompo/labor_inner_labor.svg";
import labor_inner_rest from "../../../assets/svg/Labor/LaborCompo/labor_inner_rest.svg";

import "../../styles/Labor/LaborCompo.css";

const LaborCompo = (props) => {
  const {
    sec,
    start_month,
    start_day,
    start_hour,
    start_min,

    term_hour,
    term_min,
    term_sec,

    cycle_hour,
    cycle_min,
    cycle_sec,
  } = props;

  return (
    <div className="labor-compo">
      <div className="labor-compo-div" onClick={() => console.log(cycle_sec)} />

      {/* 진통 시작 시간  */}
      <span className="labor-inner-time">
        {start_hour < 10 ? "0" + start_hour : start_hour}:
        {start_min < 10 ? "0" + start_min : start_min}
      </span>

      {/* 진통동안 시간 */}
      <img className="labor-inner-labor-icon" alt="" src={labor_inner_labor} />
      <span className="labor-inner-labor-time">
        {term_min < 10 ? "0" + term_min : term_min}:
        {term_sec < 10 ? "0" + term_sec : term_sec}
      </span>

      {/*  진통 주기  */}
      <img className="labor-inner-rest-icon" alt="" src={labor_inner_rest} />
      <span className="labor-inner-test-time">
        {cycle_min < 10 ? "0" + cycle_min : cycle_sec}:
        {cycle_sec < 10 ? "0" + cycle_sec : cycle_sec}
      </span>
    </div>
  );
};

export default LaborCompo;
