import "../../styles/Labor/LaborAlert.css";

import labor_alert_text from "../../../assets/svg/Labor/LaborAlert/labor_alert_text.svg";
import labor_alert_img from "../../../assets/images/Labor/labor_alert_img.png";

const LaborAlert = () => {
  return (
    <div className="labor-alert-div">
      <div className="labor-alert-div1" />
      <img className="labor-alert-img-icon" alt="" src={labor_alert_img} />
      <img className="labor-alert-text-icon" alt="" src={labor_alert_text} />
    </div>
  );
};

export default LaborAlert;
