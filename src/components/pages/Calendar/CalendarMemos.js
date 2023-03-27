import "../../styles/Calendar/CalendarMemos.css"
import ellipse_37 from "../../../assets/svg/Calendar/ellipse_37.svg";


const CalendarMemos = (props) => {
  const{ 
    time,
    memo,
  } = props;


  // time = 0;
  // if(time != undefined ){
  //   time = time.split(':');
  //   time = time[0] +":"+ time[1];
  // }
  // else{
  //   time = "시간 미정";
  // }
  return (
    <div className="calendar-memos">
      <img className="calendar-memos-child" alt="" src={ellipse_37} />
      <div className="div_cale_memo">{memo}</div>
      <div className="div1_cale_memo">{time}</div>
    </div>
  );
};

export default CalendarMemos;
