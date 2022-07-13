import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import { useState } from "react";
import FileResizer from "react-image-file-resizer";
import { toast } from "react-toastify";
import { ENDPOINTS } from "../../constants";
import { useAxios } from "../../utils";
import "../DateRangePicker/antd-min.css";
import "./upload.css";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

const UploadFile = ({
  imgUrl,
  imgName,
  sendTo,
  newWidth,
  newHeight,
  idParams,
}) => {
  const handleValueImg = (name, url) => {
    if (!name || !url) {
      return [];
    }
    return [
      {
        url: url,
        name: name,
      },
    ];
  };
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [heightImg, setHeightImg] = useState(null);
  const [widthImg, setWidthImg] = useState(null);
  const [fileList, setFileList] = useState(handleValueImg(imgName, imgUrl));

  const uploadImage = async (options) => {
    const { onSuccess, onError, file, onProgress } = options;

    const fmData = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (event) => {
        onProgress({ percent: (event.loaded / event.total) * 100 });
      },
    };
    fmData.append("id", idParams);
    // if (heightImg || widthImg) {
    // if (heightImg !== heightTo || widthImg !== widthTo) {
    //   fmData.append(sendTo, resizeFile(file));
    // }
    fmData.append(sendTo, file);
    // }
    useAxios
      .post(ENDPOINTS.PROMO.DRAFT, fmData, config)
      .then(() => {
        onSuccess("Ok");
      })
      .catch((err) => {
        onError({ err });
      });
  };

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const resizeFile = (file) =>
    new Promise((resolve) => {
      FileResizer.imageFileResizer(
        file,
        1040,
        336,
        "PNG",
        100,
        0,
        (File) => {
          resolve(File);
        },
        "file"
      );
    });

  const beforeUpload = (file) => {
    const isPNG = file.type === "image/png";
    if (!isPNG) {
      toast(`${file.name} is not a png file`, { type: "error" });
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", (event) => {
      const _loadedImageUrl = event.target.result;
      const image = document.createElement("img");
      image.src = _loadedImageUrl;
      image.addEventListener("load", () => {
        const { width, height } = image;
        setHeightImg(height);
        setWidthImg(width);
      });
    });
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <>
      <Upload
        listType="picture-card"
        customRequest={uploadImage}
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        multiple
        accept="image/png"
        maxCount={1}
        beforeUpload={beforeUpload}
      >
        {uploadButton}
      </Upload>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt={imgName}
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};

export default UploadFile;
