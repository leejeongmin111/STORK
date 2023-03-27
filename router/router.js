const express = require("express");
const router = express.Router();
const mysql = require("mysql2"); //설치한 mysql기능
const path = require("path");
const { json } = require("body-parser");
// const { appendFile } = require("fs");
const multer = require("multer");
var upload = multer({ test: "upload/" });

let conn = mysql.createConnection({
  // 나의 DB 정보
  host: "project-db-stu.ddns.net",
  user: "baebae",
  password: "baebae",
  port: "3307",
  database: "baebae",
  dateStrings: "date",
});



// 산부인과
router.get("/MaternityMap", function (req, res) {
  let hos_name = [];
  let hos_addr = [];
  let hos_time = [];
  let hos_tel = [];
  let sql = "select * from hospital where hos_kind='산부인과'";
  conn.query(sql, function (err, rows) {
    if (rows.length > 0) {
      for (let i = 0; i < rows.length; i++) {
        hos_name.push(rows[i].hos_name);
        hos_addr.push(rows[i].hos_address);
        hos_time.push(rows[i].hos_time);
        hos_tel.push(rows[i].hos_phone);
      }
      res.json({
        result: "success",
        name: hos_name,
        addr: hos_addr,
        tel: hos_tel,
        time: hos_time,
      });
    } else {
      console.log("데이터 오류");
      res.json({ result: "false" });
    }
  });
});

// 정신병원
router.get("/PsychiatryMap", function (req, res) {
  let hos_name = [];
  let hos_addr = [];
  let hos_time = [];
  let hos_tel = [];
  let sql = "select * from hospital where hos_kind='정신병원'";
  conn.query(sql, function (err, rows) {
    if (rows.length > 0) {
      for (let i = 0; i < rows.length; i++) {
        hos_name.push(rows[i].hos_name);
        hos_addr.push(rows[i].hos_address);
        hos_time.push(rows[i].hos_time);
        hos_tel.push(rows[i].hos_phone);
      }
      res.json({
        result: "success",
        name: hos_name,
        addr: hos_addr,
        tel: hos_tel,
        time: hos_time,
      });
    } else {
      console.log("데이터 오류");
      res.json({ result: "false" });
    }
  });
});

// 로그인
router.post("/Login", function (req, res) {
  let id = req.body.id;
  let pw = req.body.pw;
  let sql = "select * from member where mb_id = ? and mb_pw =?";
  conn.query(sql, [id, pw], function (err, rows) {
    console.log("연결성공");
    if (rows.length > 0) {
      console.log("로그인 완료");
      let seq = rows[0].mb_seq;
      let id = rows[0].mb_id;
      let name = rows[0].mb_name;
      let gender = rows[0].mb_gender;
      res.json({
        result: "success",
        seq: seq,
        id: id,
        name: name,
        gender: gender,
      });
    } else {
      console.log(err);
      res.json({ result: "false" });
    }
  });
});

// 회원가입
router.post("/join", (req, res) => {
  let id = req.body.id;
  let pw = req.body.pw;
  let name = req.body.name;
  let phone = req.body.phone;
  let gender = req.body.gender;
  let sql = `select * from member where mb_id = ?`;
  let sql2 = `insert into member(mb_id,mb_pw,mb_name,mb_gender,mb_phone) values(?,?,?,?,?)`;
  conn.query(sql, [id], function (err, rows) {
    console.log("연결성공");
    if (rows.length>0) {
      console.log("아이디 있음");
      res.json({ result: "success" });
    } else {
      conn.query(sql2,[id, pw, name, gender, phone],function (err, rows) {
        if(!err){
          console.log("회원가입 성공");
          res.json({ result: "success0" });
        } else {
          console.log(err);
          res.json({ result: "false" });
        }
      })
    }
  });
});

// 아이 정보
router.post("/myprofile", function (request, response) {
  let kid_nick = [];
  let kid_start = [];
  let kid_birth = [];
  let seq = request.body.seq;
  let sql = `select * from kid where mb_seq=?`;
  conn.query(sql, [seq], function (err, rows) {
    if (rows.length>0) {
      console.log("데이터 있음 : 성공");
      kid_nick.push(rows[0].kid_nick);
      kid_start.push(rows[0].kid_start);
      kid_birth.push(rows[0].kid_birth);
      response.json({
        result: "success",
        kid_nick:kid_nick,
        kid_start:kid_start,
        kid_birth:kid_birth,
      });
    } else if(rows.length==0){
      console.log("데이터 없음 : 성공");
      response.json({
        result: "success0",
        kid_nick:kid_nick,
        kid_start:kid_start,
        kid_birth:kid_birth,
      });
    } else {
      console.log("실패");
      response.json({ result: "false" });
    }
  });
});


// 프로필 렌더링 시 생리주기 보내기 
router.post("/myprofile_data", function (request, response) {
  let seq = request.body.seq;
  let sql = `select mb_lastmenstruation, mb_shortmensterm, mb_longmensterm from member where mb_seq=?`;
  conn.query(sql, [seq], function (err, rows) {
    if (!err) {
      response.json({
        data: rows,
      });
    } 
    else {
      response.json({ result: "false" });
    }
  });
});

// 프로필 수정
router.post("/modifyprofile", function (request, response) {
  let seq = request.body.seq;
  let kid_nick = request.body.kid_nick;
  let kid_start = request.body.kid_start;
  let kid_birth = request.body.kid_birth;

  
  // 생리 주기 정보 
  let last_blood = request.body.lastmentstruation;
  let shortmensterm = request.body.shortmensterm ;
  let longmensterm = request.body.longmensterm;

  console.log(last_blood, shortmensterm, longmensterm);


  let sql = `select * from kid where mb_seq = ?`;
  let sql2 = `insert into kid(mb_seq,kid_nick,kid_start,kid_birth) values(?,?,?,?)`;
  let sql3 = `update kid set kid_nick=?, kid_start=?, kid_birth=? where mb_seq=?`;
  let sql4 = `update member set mb_lastmenstruation = ?, mb_shortmensterm = ?, mb_longmensterm = ? WHERE (mb_seq = ?)`;

  // 생리주기 업데이트 
  // 정보 있을 때만 실행
  if(last_blood !=undefined && shortmensterm !=undefined && longmensterm !=undefined)
  conn.query(sql4, [last_blood,shortmensterm,longmensterm,seq],function(err,rows){
    if (!err) {
      console.log("성공!!!!!!!!!")
      // response.json({
      //   result: "success",
      // });
    } else {
      console.log("생리 주기 실패");
    }
  })



  conn.query(sql, [seq], function (err, rows) {
    if (rows.length==0) {
      console.log("성공");
      conn.query(sql2, [seq,kid_nick,kid_start,kid_birth], function (err, rows) {
        if (!err) {
          console.log("성공");
          response.json({result: "success"});
        } else {
          console.log("실패");
          response.json({ result: "false"});
        }
      });
    } else if(rows.length>0){
      console.log("성공");
      conn.query(sql3, [kid_nick,kid_start,kid_birth,seq], function (err, rows) {
        if (!err) {
          console.log("성공");
          response.json({result: "success"});
        } else {
          console.log("실패");
          response.json({ result: "false"});
        }
      });
    } else {
      console.log("실패");
      response.json({ result: "false" });
    }
  });
});

// 산모수첩 초기값
router.post("/initialdate", function (request, response) {
  let ml_title = []
  let ml_date = []
  let ml_weight = [];
  let ml_content = [];
  let seq = request.body.seq;
  let sql = `select * from momlog where mb_seq=? order by ml_date desc`;
  conn.query(sql, [seq], function (err, rows) {
    if (rows.length>0) {
      console.log("데이터 있음 : 성공");
      ml_title.push(rows[0].ml_title);
      ml_date.push(rows[0].ml_date);
      ml_weight.push(rows[0].ml_weight);
      ml_content.push(rows[0].ml_content);
      response.json({
        result: "success",
        ml_title:ml_title,
        ml_date:ml_date,
        ml_weight:ml_weight,
        ml_content:ml_content,
      });
    } else if(rows.length==0){
      console.log("데이터 없음 : 성공");
      response.json({
        result: "success0",
      });
    } else {
      console.log("실패");
      response.json({ result: "false" });
    }
  });
});

// 산모수첩 작성
router.post("/diarywrite", function (request, response) {
  let seq = request.body.seq;
  let title = request.body.title;
  let date = request.body.date;
  let kg = request.body.kg;
  let detail = request.body.detail;
  let score = request.body.score
  let sql = `insert into momlog(mb_seq,ml_title,ml_date,ml_weight,ml_content, ml_con) values(?,?,?,?,?,?)`;
  conn.query(sql, [seq,title,date,kg,detail,score], function (err, rows) {
    if (!err) {
      console.log("산모수첩 작성 성공");
    } else {
      console.log("산모수첩 작성 실패");
    }
  });
});

// 산모수첩 날짜 선택 
router.post("/outputdate", function (request, response) {
  // console.log("check");
  let ml_title = []
  let ml_weight = [];
  let ml_content = [];
  let seq = request.body.seq;
  let selectdate = request.body.selectdate;
  let sql = `select * from momlog where mb_seq=? and ml_date=?`;
  conn.query(sql, [seq,selectdate], function (err, rows) {
  if (rows.length>0) {
      console.log("데이터 있음 : 성공");
      ml_title.push(rows[0].ml_title);
      ml_weight.push(rows[0].ml_weight);
      ml_content.push(rows[0].ml_content);
      response.json({
        result: "success",
        ml_title:ml_title,
        ml_weight:ml_weight,
        ml_content:ml_content,
      });
    } else if(rows.length==0){
      console.log("데이터 없음 : 성공");
      response.json({
        result: "success0",
        ml_title:ml_title,
        ml_weight:ml_weight,
        ml_content:ml_content,
      });
    } else {
      console.log("실패");
      response.json({ result: "false" });
    }
  });
});

router.post('/checkmomlog', function(req,res){
  let today = req.body.today;
  let sql = `select * from momlog where ml_date=?`;
  conn.query(sql, [today], function (err, rows) {
    if (rows.length>0) {
      console.log("데이터 있음 : 성공");
      res.json({
        result: "success",
      });
    }else if(rows.length==0){
      console.log("데이터 없음 : 성공");
      res.json({
        result: "success0",
      });
    } else {
      console.log("실패");
      res.json({ result: "false" });
    }
  });
})

//지역정책
router.post("/region", function (request, response) {
  let first_baby = [];
  let second_baby = [];
  let third_baby = [];
  let fourth_baby = [];
  let fifth_baby = [];
  let target = [];
  let approach = [];
  let significant = [];
  let reg = request.body.reg;
  let sql = `select * from money where area=?`;
  conn.query(sql, [reg], function (err, rows) {
    if (rows.length>0) {
      console.log("데이터 있음 : 성공");
      for (let i = 0; i < rows.length; i++) {
        first_baby.push(rows[i].first_baby);
        second_baby.push(rows[i].second_baby);
        third_baby.push(rows[i].third_baby);
        fourth_baby.push(rows[i].fourth_baby);
        fifth_baby.push(rows[i].fifth_baby);
        target.push(rows[i].target);
        approach.push(rows[i].approach);
        significant.push(rows[i].significant);
      }
      response.json({
        result: "success",
        first_baby:first_baby,
        second_baby:second_baby,
        third_baby:third_baby,
        fourth_baby:fourth_baby,
        fifth_baby:fifth_baby,
        target:target,
        approach:approach,
        significant:significant,
      });
    } else {
      console.log("실패");
      response.json({ result: "false" });
    }
  });
});

// 차트 정보
router.post("/chartdata", function (request, response) {
  let ml_date = []
  let ml_weight = [];
  let ml_con = [];
  let seq = request.body.seq;
  let sql = `select * from momlog where mb_seq=? order by ml_date`;
  conn.query(sql, [seq], function (err, rows) {
    if (rows.length>0) {
      console.log("데이터 있음 : 성공");
      for (let i = 0; i < rows.length; i++) {
        ml_date.push(rows[i].ml_date);
        ml_weight.push(rows[i].ml_weight);
        ml_con.push(rows[i].ml_con);
      }
      response.json({
        result: "success",
        ml_date:ml_date,
        ml_weight:ml_weight,
        ml_con:ml_con,
      });
    } else {
      console.log("실패");
      response.json({ result: "false" });
    }
  });
});

// 진통 데이터 insert
router.post("/Labor", function (request, response) {
  let mb_seq = request.body.seq;
  let labor = request.body.start;

  // json 형태 전환
  labor = JSON.stringify(labor);
  console.log("ddd", labor);
  let sql = `insert into laborpain (mb_seq, labor_time) values(?,?)`;

  conn.query(sql, [mb_seq, labor], function (err, rows) {
    if (!err) {
      response.json({
        result: "success",
      });
    } else {
      console.log("진통실패");
    }
  });
});

// 진통 데이터 보내기
router.post("/Labor_data", function (request, response) {
  let mb_seq = request.body.seq;
  let sql = `select labor_time from laborpain where(mb_seq = (?))`;
  conn.query(sql, [mb_seq], function (err, rows) {
    if (!err) {
      console.log(rows,"ddddfdfdf");
      
      response.json({
        data: rows.reverse(),
      });
    } else {
    }
  });
});

// 캘린더 일정 DB 전송
router.post("/Calendar", function (request, response) {
  let seq  = request.body.seq;
  let memo = request.body.memo;
  let year = request.body.year;
  let month = request.body.month;
  let date = request.body.date;
  let calen_time = request.body.calen_time;

  let cal_date = year + "-" + month + "-" + date;


  let sql = `insert into calendar (mb_seq, cal_date, cal_time, cal_content) value(?,?,?,?)`;
  conn.query(sql, [seq, cal_date, calen_time, memo], function (err, rows) {
    if (!err) {
      response.json({
        result: "success",
      });
    } else {
      console.log("메모실패");
    }
  });
});

// 캘린더 데이터 전달
router.post("/Calendar_data", function (request, response) {
  let mb_seq = request.body.seq;
  let blood;

  // 생리 주기 받아와서 변수 담기 
  let sql1 = `select mb_lastmenstruation, mb_shortmensterm, mb_longmensterm from member where mb_seq=?`;
  conn.query(sql1, [mb_seq], function (err, rows) {
    if (!err) {
      blood = rows;
    } 
    else {
      response.json({ result: "false" });
    }
  });


  let sql = `select * from calendar where mb_seq=(?) order by cal_date, cal_time`;
  conn.query(sql, [mb_seq], function (err, rows) {
    if (!err) {
      response.json({
        data: rows,
        blood : blood,
      });
    } else {
      console.log("메모실패");
    }
  });
});

router.post("/babywrite", upload.single("img"), (req, res) => {
  let seq = parseInt(req.body.seq);
  let hos = req.body.hos;
  let crl = parseFloat(req.body.crl);
  let ac = parseFloat(req.body.ac);
  let fl = parseFloat(req.body.fl);
  let date = req.body.date;
  let detail = req.body.detail;
  let week = req.body.week;
  let img = req.file.buffer;
  let sql = `insert into babylog(mb_seq,bl_date,bl_detail,bl_week,bl_crl,bl_ac,bl_fl,bl_hos,bl_img) values(?,?,?,?,?,?,?,?,?)`;

  conn.query(
    sql,
    [seq, date, detail, week, crl, ac, fl, hos, img],
    (err, rows) => {
      if (!err) {
        console.log("아기일기 DB저장 완료");
      } else {
        console.log("실패" + err);
      }
    }
  );
});

// 아가수첩 날짜 선택
router.post("/outputdate/babylog", function (request, response) {
  // console.log("check");
  let bl_hos = [];
  let bl_crl = [];
  let bl_ac = [];
  let bl_fl = [];
  let bl_week = [];
  let bl_detail = [];
  let seq = request.body.seq;
  let selectdate = request.body.selectdate;
  let sql = `select * from babylog where mb_seq=? and bl_date=?`;
  conn.query(sql, [seq, selectdate], function (err, rows) {
    if (rows.length > 0) {
      console.log("데이터 있음 : 성공");
      bl_hos.push(rows[0].bl_hos);
      bl_crl.push(rows[0].bl_crl);
      bl_ac.push(rows[0].bl_ac);
      bl_fl.push(rows[0].bl_fl);
      bl_week.push(rows[0].bl_week);
      bl_detail.push(rows[0].bl_detail);

      response.json({
        result: "success",
        bl_ac: bl_ac,
        bl_crl: bl_crl,
        bl_fl: bl_fl,
        bl_week: bl_week,
        bl_detail: bl_detail,
        bl_hos: bl_hos,
      });
    } else if (rows.length == 0) {
      console.log("데이터 없음 : 성공");
      response.json({
        result: "success0",
        bl_ac: bl_ac,
        bl_crl: bl_crl,
        bl_fl: bl_fl,
        bl_week: bl_week,
        bl_detail: bl_detail,
        bl_hos: bl_hos,
      });
    } else {
      console.log("실패");
      response.json({ result: "false" });
    }
  });
});

router.post("/babyDiary", (req, res) => {
  let bl_hos = [];
  let bl_crl = [];
  let bl_ac = [];
  let bl_fl = [];
  let bl_week = [];
  let bl_detail = [];
  let bl_date = [];
  let bl_img = [];
  let seq = req.body.seq;
  sql = `select * from babylog where mb_seq=?`;
  conn.query(sql, [seq], function (err, rows) {
    if (rows.length > 0) {
      console.log("데이터 있음 : 성공");
      bl_hos.push(rows[0].bl_hos);
      bl_crl.push(rows[0].bl_crl);
      bl_ac.push(rows[0].bl_ac);
      bl_fl.push(rows[0].bl_fl);
      bl_week.push(rows[0].bl_week);
      bl_detail.push(rows[0].bl_detail);
      bl_date.push(rows[0].bl_date);
      bl_img.push(rows[0].bl_img);
      res.json({
        result: "success",
        bl_ac: bl_ac,
        bl_crl: bl_crl,
        bl_fl: bl_fl,
        bl_week: bl_week,
        bl_detail: bl_detail,
        bl_hos: bl_hos,
        bl_date: bl_date,
        bl_img: bl_img,
      });
    } else if (rows.length == 0) {
      console.log("데이터 없음 : 성공");
      res.json({
        result: "success0",
        bl_ac: bl_ac,
        bl_crl: bl_crl,
        bl_fl: bl_fl,
        bl_week: bl_week,
        bl_detail: bl_detail,
        bl_hos: bl_hos,
        bl_date: bl_date,
        bl_img: bl_img,
      });
    } else {
      console.log("실패");
      res.json({ result: "false" });
    }
  });
});

router.get("*", function (request, response) {
  console.log("Happy Hacking!");
  response.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

module.exports = router;
