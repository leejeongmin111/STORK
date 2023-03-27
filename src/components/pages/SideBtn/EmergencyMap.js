import React, { useEffect, useState, useRef } from "react";
import "../../styles/SideBtn/EmergencyMap.css";
import axios from "axios";

/* global kakao */
const EmergencyMap = () => {
  const [map, setMap] = useState("");
  // const [infowindow, setInfowindow] = useState()
  const [name, setName] = useState([]);
  const [addr, setAddr] = useState([]);
  const [time, setTime] = useState([]);
  const [tel, setTel] = useState([]);
  let content = [];
  let markers = [];
  let infowindows = [];
  const mapContainer = useRef(null);
  const { kakao } = window;
  let mapOption = {
    center: new kakao.maps.LatLng(35.14962266596815, 126.92057654445857), //지도의 중심좌표.
    level: 5, //지도의 레벨(확대, 축소 정도)
  };

  useEffect(()=>{
    mylocation();
  },[map])

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3001/MaternityMap", {})
      .then((res) => {
        if (res.data.result == "success") {
          setName(res.data.name);
          setAddr(res.data.addr);
          setTime(res.data.time);
          setTel(res.data.tel);
        } else {
          console.log("데이터베이스 오류");
        }
      })
      .catch(() => {
        console.log("데이터 보내기 실패");
      });
    setMap(new kakao.maps.Map(mapContainer.current, mapOption));
  }, []);

  let geocoder = new kakao.maps.services.Geocoder();

  const geo = (i) => {
    geocoder.addressSearch(`${addr[i]}`, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        let marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        markers.push(marker);

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
          // position:coords,
          content: content[i],
          // removable: true,
        });

        infowindows.push(infowindow);


        kakao.maps.event.addListener(
          marker,
          "click",
          function(){
            removeInfowindow();
            infowindow.open(map,marker)
          }
        );

        kakao.maps.event.addListener(
          map,
          'click',
          function(){
            infowindow.close();
          }
        );
      }
    });
  };

  const mylocation = ()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude,
            lon = position.coords.longitude
        
        let locPosition = new kakao.maps.LatLng(lat, lon);

        var imageSrc = 'https://cdn-icons-png.flaticon.com/512/4749/4749735.png',
          imageSize = new kakao.maps.Size(40, 40)
    
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)

        new kakao.maps.Marker({
          map: map, 
          position: locPosition,
          image: markerImage
        });
  
        // // 지도 중심좌표를 접속위치로 변경합니다
        removeInfowindow();
        map.setCenter(locPosition);
      });
    }
  };

  for (let i = 0; i < name.length; i++) {
    content.push(
      `<div style="height:150px; overflow:auto">
      <div class="title" style='font-family: dotum, arial, sans-serif;'>${name[i]}</div>
      <table class="tablestyle" style='border-spacing:2px;border:0px;'>
        <tbody>
          <tr>
            <td class="content_title">주소</td>
            <td class="content">${addr[i]}</td>
          </tr>
          <tr>
            <td class="content_title">전화번호</td>
            <td class="content">${tel[i]}</td>
          </tr>
          <tr>
            <td class="content_title">진료시간</td>
            <td class="content" id="ddd" style='white-space:pre-line;'>${time[i]}</td>
          </tr>
        </tbody>
      </table>
      </div>`
    );
    geo(i);
  }

  const removeMarker = () => {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  };

  const removeInfowindow = () => {
    for(var i=0; i<infowindows.length; i++){
      infowindows[i].close();
    }
  }

  return <div id="map" ref={mapContainer}></div>;
};
export default EmergencyMap;