import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@windmill/react-ui";
import React, {useContext, useEffect, useState} from "react";
import {toast} from "react-toastify";
import {LoadingSpinner} from "../../../components";
import {deleteBranch, getBranchList} from "../../../context/actions";
import {GlobalContext} from "../../../context/GlobalState";

const Delete = ({isOpen, onCloseModal}) => {
  const {branchState, branchDispatch} = useContext(GlobalContext);

  const {
    branchList: {page, filter, search},
    branchListId: {data, isLoading},
  } = branchState;

  const [newBranch, setNewBranch] = useState({
    id: null,
    branch_name: "",
    branch_code: "",
    dealer: "",
  });

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const successAction = () => {
      setTimeout(() => {
        getBranchList(page, filter[0], filter[1], search)(branchDispatch);
      }, 200);
      onCloseModal();
      toast("Success deleted!", {type: "success"});
    };
    const errorAction = () => {
      toast("Failed delete!", {type: "error"});
    };
    deleteBranch(newBranch.id, successAction, errorAction)();
  };

  useEffect(() => {
    if (data !== null) {
      setNewBranch(data);
    }
  }, [data]);

  return (
    <Modal isOpen={isOpen} onClose={onCloseModal}>
      <ModalHeader>Are you sure want to delete?</ModalHeader>
      <form action="" onSubmit={onHandleSubmit}>
        {isLoading ? (
          <LoadingSpinner height="80" />
        ) : (
          <ModalBody className="flex flex-col gap-4 my-8">
            <span>
              {newBranch.dealer}, {newBranch.branch_code},{" "}
              {newBranch.branch_name}
            </span>
          </ModalBody>
        )}
        <ModalFooter className="flex-col-reverse gap-2">
          <div className="w-full sm:w-auto block">
            <Button
              layout="outline"
              className="w-full sm:w-auto"
              onClick={onCloseModal}
            >
              Cancel
            </Button>
          </div>
          <div className="w-full sm:w-auto block">
            <Button type="submit" className="w-full sm:w-auto">
              Delete
            </Button>
          </div>
        </ModalFooter>
      </form>
    </Modal>
  );
};

export default Delete;
