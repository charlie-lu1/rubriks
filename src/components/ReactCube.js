import React, { useState } from "react";
import { yellow, white, green, blue, orange, red } from "../utils/initCube";
import { Cube } from "../utils/Cube";

let rubix = new Cube(yellow, white, green, blue, orange, red);

const ReactCube = () => {
  const [cube, setCube] = useState(rubix);

  const command = (phrase) => {
    rubix.command(phrase);
    // console.table([rubix.vert1, rubix.vert2, rubix.hori1, rubix.hori2, rubix.lati1, rubix.lati2])
    let nextCube = new Cube(
      rubix.vert1,
      rubix.vert2,
      rubix.hori1,
      rubix.hori2,
      rubix.lati1,
      rubix.lati2
    );
    setCube(nextCube);
  };

  return (
    <>
      <div className="cube">
        <div className="mid">
          <div className="face none"></div>
          <div className="face">
            <div className="row">
              <div className={`cell ${cube.vert1.topLeft.self}`}>
                {cube.vert1.topLeft.num}
              </div>
              <div className={`cell ${cube.vert1.topMid.self}`}>
                {cube.vert1.topMid.num}
              </div>
              <div className={`cell ${cube.vert1.topRight.self}`}>
                {cube.vert1.topRight.num}
              </div>
            </div>
            <div className="row">
              <div className={`cell ${cube.vert1.middleLeft.self}`}>
                {cube.vert1.middleLeft.num}
              </div>
              <div className={`cell ${cube.vert1.middleMid.self}`}>
                {cube.vert1.middleMid.num}
              </div>
              <div className={`cell ${cube.vert1.middleRight.self}`}>
                {cube.vert1.middleRight.num}
              </div>
            </div>
            <div className="row">
              <div className={`cell ${cube.vert1.bottomLeft.self}`}>
                {cube.vert1.bottomLeft.num}
              </div>
              <div className={`cell ${cube.vert1.bottomMid.self}`}>
                {cube.vert1.bottomMid.num}
              </div>
              <div className={`cell ${cube.vert1.bottomRight.self}`}>
                {cube.vert1.bottomRight.num}
              </div>
            </div>
          </div>
        </div>

        <div className="mid">
          <div className="face">
            <div className="row">
              <div className={`cell ${cube.hori1.topLeft.self}`}>
                {cube.hori1.topLeft.num}
              </div>
              <div className={`cell ${cube.hori1.topMid.self}`}>
                {cube.hori1.topMid.num}
              </div>
              <div className={`cell ${cube.hori1.topRight.self}`}>
                {cube.hori1.topRight.num}
              </div>
            </div>
            <div className="row">
              <div className={`cell ${cube.hori1.middleLeft.self}`}>
                {cube.hori1.middleLeft.num}
              </div>
              <div className={`cell ${cube.hori1.middleMid.self}`}>
                {cube.hori1.middleMid.num}
              </div>
              <div className={`cell ${cube.hori1.middleRight.self}`}>
                {cube.hori1.middleRight.num}
              </div>
            </div>
            <div className="row">
              <div className={`cell ${cube.hori1.bottomLeft.self}`}>
                {cube.hori1.bottomLeft.num}
              </div>
              <div className={`cell ${cube.hori1.bottomMid.self}`}>
                {cube.hori1.bottomMid.num}
              </div>
              <div className={`cell ${cube.hori1.bottomRight.self}`}>
                {cube.hori1.bottomRight.num}
              </div>
            </div>
          </div>
          <div className="face">
            <div className="row">
              <div className={`cell ${cube.lati1.topLeft.self}`}>
                {cube.lati1.topLeft.num}
              </div>
              <div className={`cell ${cube.lati1.topMid.self}`}>
                {cube.lati1.topMid.num}
              </div>
              <div className={`cell ${cube.lati1.topRight.self}`}>
                {cube.lati1.topRight.num}
              </div>
            </div>
            <div className="row">
              <div className={`cell ${cube.lati1.middleLeft.self}`}>
                {cube.lati1.middleLeft.num}
              </div>
              <div className={`cell ${cube.lati1.middleMid.self}`}>
                {cube.lati1.middleMid.num}
              </div>
              <div className={`cell ${cube.lati1.middleRight.self}`}>
                {cube.lati1.middleRight.num}
              </div>
            </div>
            <div className="row">
              <div className={`cell ${cube.lati1.bottomLeft.self}`}>
                {cube.lati1.bottomLeft.num}
              </div>
              <div className={`cell ${cube.lati1.bottomMid.self}`}>
                {cube.lati1.bottomMid.num}
              </div>
              <div className={`cell ${cube.lati1.bottomRight.self}`}>
                {cube.lati1.bottomRight.num}
              </div>
            </div>
          </div>
          <div className="face">
            <div className="row">
              <div className={`cell ${cube.hori2.topLeft.self}`}>
                {cube.hori2.topLeft.num}
              </div>
              <div className={`cell ${cube.hori2.topMid.self}`}>
                {cube.hori2.topMid.num}
              </div>
              <div className={`cell ${cube.hori2.topRight.self}`}>
                {cube.hori2.topRight.num}
              </div>
            </div>
            <div className="row">
              <div className={`cell ${cube.hori2.middleLeft.self}`}>
                {cube.hori2.middleLeft.num}
              </div>
              <div className={`cell ${cube.hori2.middleMid.self}`}>
                {cube.hori2.middleMid.num}
              </div>
              <div className={`cell ${cube.hori2.middleRight.self}`}>
                {cube.hori2.middleRight.num}
              </div>
            </div>
            <div className="row">
              <div className={`cell ${cube.hori2.bottomLeft.self}`}>
                {cube.hori2.bottomLeft.num}
              </div>
              <div className={`cell ${cube.hori2.bottomMid.self}`}>
                {cube.hori2.bottomMid.num}
              </div>
              <div className={`cell ${cube.hori2.bottomRight.self}`}>
                {cube.hori2.bottomRight.num}
              </div>
            </div>
          </div>
          <div className="face">
            <div className="row">
              <div className={`cell ${cube.lati2.bottomLeft.self}`}>
                {cube.lati2.bottomLeft.num}
              </div>
              <div className={`cell ${cube.lati2.bottomMid.self}`}>
                {cube.lati2.bottomMid.num}
              </div>
              <div className={`cell ${cube.lati2.bottomRight.self}`}>
                {cube.lati2.bottomRight.num}
              </div>
            </div>
            <div className="row">
              <div className={`cell ${cube.lati2.middleLeft.self}`}>
                {cube.lati2.middleLeft.num}
              </div>
              <div className={`cell ${cube.lati2.middleMid.self}`}>
                {cube.lati2.middleMid.num}
              </div>
              <div className={`cell ${cube.lati2.middleRight.self}`}>
                {cube.lati2.middleRight.num}
              </div>
            </div>
            <div className="row">
              <div className={`cell ${cube.lati2.topLeft.self}`}>
                {cube.lati2.topLeft.num}
              </div>
              <div className={`cell ${cube.lati2.topMid.self}`}>
                {cube.lati2.topMid.num}
              </div>
              <div className={`cell ${cube.lati2.topRight.self}`}>
                {cube.lati2.topRight.num}
              </div>
            </div>
          </div>
        </div>

        <div className="mid">
          <div className="face none"></div>
          <div className="face">
            <div className="row">
              <div className={`cell ${cube.vert2.topLeft.self}`}>
                {cube.vert2.topLeft.num}
              </div>
              <div className={`cell ${cube.vert2.topMid.self}`}>
                {cube.vert2.topMid.num}
              </div>
              <div className={`cell ${cube.vert2.topRight.self}`}>
                {cube.vert2.topRight.num}
              </div>
            </div>
            <div className="row">
              <div className={`cell ${cube.vert2.middleLeft.self}`}>
                {cube.vert2.middleLeft.num}
              </div>
              <div className={`cell ${cube.vert2.middleMid.self}`}>
                {cube.vert2.middleMid.num}
              </div>
              <div className={`cell ${cube.vert2.middleRight.self}`}>
                {cube.vert2.middleRight.num}
              </div>
            </div>
            <div className="row">
              <div className={`cell ${cube.vert2.bottomLeft.self}`}>
                {cube.vert2.bottomLeft.num}
              </div>
              <div className={`cell ${cube.vert2.bottomMid.self}`}>
                {cube.vert2.bottomMid.num}
              </div>
              <div className={`cell ${cube.vert2.bottomRight.self}`}>
                {cube.vert2.bottomRight.num}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => command("top_to_left")}>TTL</button>
      <button onClick={() => command("top_to_right")}>TTR</button>
      <button onClick={() => command("mid_to_left")}>MTL</button>
      <button onClick={() => command("mid_to_right")}>MTR</button>
      <button onClick={() => command("bot_to_left")}>BTL</button>
      <button onClick={() => command("bot_to_right")}>BTR</button>

      <button onClick={() => command("left_to_up")}>LTU</button>
      <button onClick={() => command("left_to_down")}>LTD</button>
      <button onClick={() => command("middle_to_up")}>MTU</button>
      <button onClick={() => command("middle_to_down")}>MTD</button>
      <button onClick={() => command("right_to_up")}>RTU</button>
      <button onClick={() => command("right_to_down")}>RTD</button>

      <button onClick={() => command("h_left_to_up")}>HLTU</button>
      <button onClick={() => command("h_left_to_down")}>HLTD</button>
      <button onClick={() => command("h_middle_to_up")}>HMTU</button>
      <button onClick={() => command("h_middle_to_down")}>HMTD</button>
      <button onClick={() => command("h_right_to_up")}>HRTU</button>
      <button onClick={() => command("h_right_to_down")}>HRTD</button>
    </>
  );
};
export default ReactCube;