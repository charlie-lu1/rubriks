export class Cube {
  constructor(yellow, white, green, blue, orange, red) {
    console.log(yellow, white, green, blue, orange, red);
    this.vert1 = new Face(yellow);
    this.vert2 = new Face(white);
    this.hori1 = new Face(green);
    this.hori2 = new Face(blue);
    this.lati1 = new Face(orange);
    this.lati2 = new Face(red);
  }
  command(phrase) {
    console.log(phrase);
    let h1 = {
      id: this.hori1.id,
      tl: this.hori1.topLeft,
      tm: this.hori1.topMid,
      tr: this.hori1.topRight,
      ml: this.hori1.middleLeft,
      mm: this.hori1.middleMid,
      mr: this.hori1.middleRight,
      bl: this.hori1.bottomLeft,
      bm: this.hori1.bottomMid,
      br: this.hori1.bottomRight,
    };
    let h2 = {
      id: this.hori2.id,
      tl: this.hori2.topLeft,
      tm: this.hori2.topMid,
      tr: this.hori2.topRight,
      ml: this.hori2.middleLeft,
      mm: this.hori2.middleMid,
      mr: this.hori2.middleRight,
      bl: this.hori2.bottomLeft,
      bm: this.hori2.bottomMid,
      br: this.hori2.bottomRight,
    };
    let l1 = {
      id: this.lati1.id,
      tl: this.lati1.topLeft,
      tm: this.lati1.topMid,
      tr: this.lati1.topRight,
      ml: this.lati1.middleLeft,
      mm: this.lati1.middleMid,
      mr: this.lati1.middleRight,
      bl: this.lati1.bottomLeft,
      bm: this.lati1.bottomMid,
      br: this.lati1.bottomRight,
    };
    let l2 = {
      id: this.lati2.id,
      tl: this.lati2.topLeft,
      tm: this.lati2.topMid,
      tr: this.lati2.topRight,
      ml: this.lati2.middleLeft,
      mm: this.lati2.middleMid,
      mr: this.lati2.middleRight,
      bl: this.lati2.bottomLeft,
      bm: this.lati2.bottomMid,
      br: this.lati2.bottomRight,
    };
    let v1 = {
      id: this.vert1.id,
      tl: this.vert1.topLeft,
      tm: this.vert1.topMid,
      tr: this.vert1.topRight,
      ml: this.vert1.middleLeft,
      mm: this.vert1.middleMid,
      mr: this.vert1.middleRight,
      bl: this.vert1.bottomLeft,
      bm: this.vert1.bottomMid,
      br: this.vert1.bottomRight,
    };
    let v2 = {
      id: this.vert2.id,
      tl: this.vert2.topLeft,
      tm: this.vert2.topMid,
      tr: this.vert2.topRight,
      ml: this.vert2.middleLeft,
      mm: this.vert2.middleMid,
      mr: this.vert2.middleRight,
      bl: this.vert2.bottomLeft,
      bm: this.vert2.bottomMid,
      br: this.vert2.bottomRight,
    };

    switch (phrase) {
      case "top_to_left":
        this.lati1.leftAndRight(l1, h2, "top");
        this.hori1.leftAndRight(h1, l1, "top");
        this.lati2.leftAndRight(l2, h1, "top");
        this.hori2.leftAndRight(h2, l2, "top");
        break;
      case "top_to_right":
        this.lati1.leftAndRight(l1, h1, "top");
        this.hori1.leftAndRight(h1, l2, "top");
        this.lati2.leftAndRight(l2, h2, "top");
        this.hori2.leftAndRight(h2, l1, "top");
        break;
      case "mid_to_left":
        this.lati1.leftAndRight(l1, h2, "middle");
        this.hori1.leftAndRight(h1, l1, "middle");
        this.lati2.leftAndRight(l2, h1, "middle");
        this.hori2.leftAndRight(h2, l2, "middle");
        break;
      case "mid_to_right":
        this.lati1.leftAndRight(l1, h1, "middle");
        this.hori1.leftAndRight(h1, l2, "middle");
        this.lati2.leftAndRight(l2, h2, "middle");
        this.hori2.leftAndRight(h2, l1, "middle");
        break;
      case "bot_to_left":
        this.lati1.leftAndRight(l1, h2, "bottom");
        this.hori1.leftAndRight(h1, l1, "bottom");
        this.lati2.leftAndRight(l2, h1, "bottom");
        this.hori2.leftAndRight(h2, l2, "bottom");
        break;
      case "bot_to_right":
        this.lati1.leftAndRight(l1, h1, "bottom");
        this.hori1.leftAndRight(h1, l2, "bottom");
        this.lati2.leftAndRight(l2, h2, "bottom");
        this.hori2.leftAndRight(h2, l1, "bottom");
        break;

      //---------------------------------------------------------------
      case "left_to_up":
        //do the thing
        this.lati1.upAndDown(l1, v2, "Left");
        this.vert1.upAndDown(v1, l1, "Left");
        this.lati2.upAndDown(l2, v1, "Left");
        this.vert2.upAndDown(v2, l2, "Left");
        break;
      case "left_to_down":
        //do the thing
        this.lati1.upAndDown(l1, v1, "Left");
        this.vert1.upAndDown(v1, l2, "Left");
        this.lati2.upAndDown(l2, v2, "Left");
        this.vert2.upAndDown(v2, l1, "Left");
        break;
      case "middle_to_up":
        this.lati1.upAndDown(l1, v2, "Mid");
        this.vert1.upAndDown(v1, l1, "Mid");
        this.lati2.upAndDown(l2, v1, "Mid");
        this.vert2.upAndDown(v2, l2, "Mid");
        break;
      case "middle_to_down":
        this.lati1.upAndDown(l1, v1, "Mid");
        this.vert1.upAndDown(v1, l2, "Mid");
        this.lati2.upAndDown(l2, v2, "Mid");
        this.vert2.upAndDown(v2, l1, "Mid");
        break;
      case "right_to_up":
        this.lati1.upAndDown(l1, v2, "Right");
        this.vert1.upAndDown(v1, l1, "Right");
        this.lati2.upAndDown(l2, v1, "Right");
        this.vert2.upAndDown(v2, l2, "Right");
        break;
      case "right_to_down":
        this.lati1.upAndDown(l1, v1, "Right");
        this.vert1.upAndDown(v1, l2, "Right");
        this.lati2.upAndDown(l2, v2, "Right");
        this.vert2.upAndDown(v2, l1, "Right");
        break;
      //---------------------------------------------------------------
      case "h_left_to_up":
        //do the thing
        this.hori1.upAndDown(h1, v2, "Right");
        this.vert1.leftAndRight(v1, h1, "bottom");
        this.hori2.upAndDown(h2, v1, "Left");
        this.vert2.leftAndRight(v2, h2, "top");
        break;
      case "h_left_to_down":
        //do the thing
        this.hori1.upAndDown(h1, v1, "Left");
        this.vert1.upAndDown(v1, h2, "Left");
        this.hori2.upAndDown(h2, v2, "Left");
        this.vert2.upAndDown(v2, h1, "Left");
        break;
      case "h_middle_to_up":
        this.hori1.upAndDown(h1, v2, "Mid");
        this.vert1.upAndDown(v1, h1, "Mid");
        this.hori2.upAndDown(h2, v1, "Mid");
        this.vert2.upAndDown(v2, h2, "Mid");
        break;
      case "h_middle_to_down":
        this.hori1.upAndDown(h1, v1, "Mid");
        this.vert1.upAndDown(v1, h2, "Mid");
        this.hori2.upAndDown(h2, v2, "Mid");
        this.vert2.upAndDown(v2, h1, "Mid");
        break;
      case "h_right_to_up":
        //do the thing
        this.hori1.upAndDown(h1, v2, "Right");
        this.vert1.upAndDown(v1, h1, "Right");
        this.hori2.upAndDown(h2, v1, "Right");
        this.vert2.upAndDown(v2, h2, "Right");
        break;
      case "h_right_to_down":
        //do the thing
        this.hori1.upAndDown(h1, v1, "Right");
        this.vert1.upAndDown(v1, h2, "Right");
        this.hori2.upAndDown(h2, v2, "Right");
        this.vert2.upAndDown(v2, h1, "Right");
        break;
    }
  }
}

class Face {
  constructor({
    topLeft,
    topMid,
    topRight,
    middleLeft,
    middleMid,
    middleRight,
    bottomLeft,
    bottomMid,
    bottomRight,
    id,
  }) {
    this.id = id;
    this.topLeft = new Cell(topLeft);
    this.topMid = new Cell(topMid);
    this.topRight = new Cell(topRight);

    this.middleLeft = new Cell(middleLeft);
    this.middleMid = new Cell(middleMid);
    this.middleRight = new Cell(middleRight);

    this.bottomLeft = new Cell(bottomLeft);
    this.bottomMid = new Cell(bottomMid);
    this.bottomRight = new Cell(bottomRight);
  }
  leftAndRight(toFace, fromFace, row) {
    console.log(toFace.id, fromFace.id, row);

    if (row === "top" || row === "bottom") {
      if (toFace.id !== "lati2" && fromFace.id === "lati2") {
        // entering the back face

        if (row === "top") {
          console.log("enter top");
          // Top of From >> Bottom of Back
          console.log(toFace.tl);
          this.topLeft = new Cell(fromFace.bl);
          this.topMid = new Cell(fromFace.bm);
          this.topRight = new Cell(fromFace.br);
        } else {
          console.log("enter else");
          // Bottom of From >> Top of Back
          this.bottomLeft = new Cell(fromFace.tl);
          this.bottomMid = new Cell(fromFace.tm);
          this.bottomRight = new Cell(fromFace.tr);
        }
      } else if (toFace.id === "lati2" && fromFace.id !== "lati2") {
        //leaving the back face
        if (row === "top") {
          console.log("leave top");
          // Top of From >> Bottom of Back
          this.bottomLeft = new Cell(fromFace.tl);
          this.bottomMid = new Cell(fromFace.tm);
          this.bottomRight = new Cell(fromFace.tr);
        } else {
          console.log("laeve else");
          // Bottom of From >> Top of Back
          this.topLeft = new Cell(fromFace.bl);
          this.topMid = new Cell(fromFace.bm);
          this.topRight = new Cell(fromFace.br);
        }
      } else {
        console.log("else");
        const r = row.split("")[0];
        this[`${row}Left`] = new Cell(fromFace[`${r}l`]);
        this[`${row}Mid`] = new Cell(fromFace[`${r}m`]);
        this[`${row}Right`] = new Cell(fromFace[`${r}r`]);
      }
    } else {
      const r = row.split("")[0];
      this[`${row}Left`] = new Cell(fromFace[`${r}l`]);
      this[`${row}Mid`] = new Cell(fromFace[`${r}m`]);
      this[`${row}Right`] = new Cell(fromFace[`${r}r`]);
    }
    console.log("___________q END p___________");
  }
  upAndDown(fromFace, toFace, column) {
    const c = column.split("")[0].toLowerCase();
    this[`top${column}`] = new Cell(toFace[`t${c}`]);
    this[`middle${column}`] = new Cell(toFace[`m${c}`]);
    this[`bottom${column}`] = new Cell(toFace[`b${c}`]);
  }
  // Rotate 90 deggrees
  //
}

class Cell {
  constructor({ self, up, right, down, left, num, id }) {
    this.self = self;
    this.up = up;
    this.right = right;
    this.down = down;
    this.left = left;
    this.num = num;
    this.id = id;
  }
}