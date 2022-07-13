// import React from "react";
// // import * as FileSaver from "file-saver";
// import * as XLSX from "xlsx";
// import { Button } from "@windmill/react-ui";

// const ExportExcel = ({ apiData, fileName, disabled = false }) => {
//   const fileType =
//     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
//   // const fileExtension = ".xlsx";

//   const exportToCSV = (api, name) => {
//     const ws = XLSX.utils.json_to_sheet(api);
//     const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
//     const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
//     // const data = new Blob([excelBuffer], { type: fileType });
//     // FileSaver.saveAs(data, name + fileExtension);
//   };

//   return (
//     <Button disabled={disabled} onClick={() => exportToCSV(apiData, fileName)}>
//       Export
//     </Button>
//   );
// };

// export default ExportExcel;
