import { Modal, ModalHeader } from "@windmill/react-ui";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { LoadingSpinner } from "../../../components";
import { addBranchList, getBranchList } from "../../../context/actions";
import { GlobalContext } from "../../../context/GlobalState";
import { removeEndSpaces } from "../../../helpers";
import FormEditClone from "./FormEditClone";

const Clone = ({ isOpen, onCloseModal }) => {
  const { branchState, branchDispatch } = useContext(GlobalContext);
  const {
    branchList: {page, filter, search},
    branchListId: {data, isLoading},
  } = branchState;

  const [newBranchList, setNewBranchList] = useState({
    id: null,
    dealer: "",
    branch_name: "",
    branch_code: "",
    spv_phonenumber: "",
    spv_name: "",
    status: true,
  });

  const dataBranch = {
    dealer: newBranchList.dealer,
    branch_name: removeEndSpaces(newBranchList.branch_name),
    branch_code: newBranchList.branch_code,
    spv_phonenumber: newBranchList.spv_phonenumber,
    spv_name: removeEndSpaces(newBranchList.spv_name),
    status: newBranchList.status,
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const successAction = () => {
      setTimeout(() => {
        getBranchList(page, filter[0], filter[1], search)(branchDispatch);
      }, 200);
      onCloseModal();
      toast("Success created!", { type: "success" });
    };
    const errorAction = () => {
      toast("Failed create!", { type: "error" });
    };
    addBranchList(dataBranch, successAction, errorAction)();
  };

  useEffect(() => {
    if (data !== null) {
      setNewBranchList(data);
    }
  }, [data, branchDispatch]);

  return (
    <Modal isOpen={isOpen} onClose={onCloseModal}>
      <ModalHeader>Clone Branch</ModalHeader>
      {isLoading ? (
        <LoadingSpinner height={300} />
      ) : (
        <FormEditClone
          onHandleSubmit={onHandleSubmit}
          onCloseModal={onCloseModal}
          newBranchList={newBranchList}
          setNewBranchList={setNewBranchList}
          textSubmit="Create"
        />
      )}
    </Modal>
  );
};

export default Clone;
