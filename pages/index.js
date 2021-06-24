import { useRef } from "react";
import Test from "@/components/Test";
import { FileDrop } from "react-file-drop";

export default function Home() {
  const fileInputRef = useRef(null);

  const onFileInputChange = (event) => {
    const { file } = event.target;
    handleImage(file[0]);
  };

  const onTargetClick = () => {
    fileInputRef.current.click();
  };

  const handleImage = (file) => {
    drawImgToCanvas(file);
    //uploadImage(file);
  };

  const uploadImage = (file) => {
    //S3.upload_stuff(file);
  };

  const drawImgToCanvas = (file) => {
    var url = URL.createObjectURL(file[0]);
    var img = new Image();
    img.onload = function () {
      var canvas = document.getElementById("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
    };
    img.src = url;
  };

  return (
    <>
      <div>
        <input
          onChange={onFileInputChange}
          ref={fileInputRef}
          type="file"
          style={{ display: "none" }}
        />
        <FileDrop
          onDrop={(file) => handleImage(file)}
          onTargetClick={onTargetClick}
        >
          Click or Drop File Here
        </FileDrop>
      </div>
      <canvas id="canvas"></canvas>
      <Test>test</Test>
    </>
  );
}
