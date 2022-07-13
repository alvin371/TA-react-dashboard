import {
  Button,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Select,
} from "@windmill/react-ui";
import React, {useContext} from "react";
import {toast} from "react-toastify";
import {ToggleSwitch} from "../../../components";
import {addBranchList, getBranchList} from "../../../context/actions";
import {GlobalContext} from "../../../context/GlobalState";
import {removeEndSpaces, toTitleCase} from "../../../helpers";
import {useForm} from "../../../utils";

const Create = ({isOpen, onCloseModal}) => {
  const [branch, setBranch] = useForm({
    dealer: "",
    branch_name: "",
    branch_code: "",
    spv_name: "",
    spv_phonenumber: "",
    status: true,
  });

  const {branchState, branchDispatch} = useContext(GlobalContext);
  const {
    branchList: {page, filter, search},
  } = branchState;

  const newBranchList = {
    dealer: branch.dealer,
    branch_name: removeEndSpaces(branch.branch_name),
    branch_code: branch.branch_code,
    spv_name: removeEndSpaces(branch.spv_name),
    spv_phonenumber: branch.spv_phonenumber,
    status: branch.status,
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const successAction = () => {
      setTimeout(() => {
        getBranchList(page, filter[0], filter[1], search)(branchDispatch);
      }, 200);
      onCloseModal();
      toast("Success created!", {type: "success"});
      setBranch("reset");
    };
    const errorAction = () => {
      toast("Failed create!", {type: "error"});
    };
    addBranchList(newBranchList, successAction, errorAction)();
  };

  return (
    <Modal isOpen={isOpen} onClose={onCloseModal}>
      <ModalHeader>Add Branch</ModalHeader>
      <form action="" onSubmit={onHandleSubmit}>
        <ModalBody className="flex flex-col gap-4 my-8">
          <Label>
            <span>Dealer</span>
            <Select
              value={branch.dealer}
              onChange={(e) => setBranch("dealer", e.target.value)}
              className="mt-1"
              required
            >
              <option value="">Pilih Dealer</option>
              <option value="DSO">DSO</option>
              <option value="TSO">TSO</option>
            </Select>
          </Label>
          <Label>
            <span>Branch Name (MUST HAVE SAME NAME AS ZOHO)</span>
            <Input
              required
              value={branch.branch_name}
              onChange={(e) => {
                const re = /^(?! |.* {2})[\s\S]{0,24}$/;
                if (e.target.value === "" || re.test(e.target.value)) {
                  setBranch("branch_name", e.target.value);
                }
              }}
              className="mt-1"
              type="text"
              placeholder="TSO Sudirman"
            />
          </Label>
          <Label>
            <span>Branch Code</span>
            <Input
              required
              value={branch.branch_code}
              onChange={(e) => {
                const re = /^(?! |.* )[a-zA-Z0-9]{0,6}$/;
                if (e.target.value === "" || re.test(e.target.value)) {
                  setBranch("branch_code", e.target.value.toUpperCase());
                }
              }}
              className="mt-1"
              placeholder="T101"
            />
          </Label>
          <Label>
            <span>SPV Name</span>
            <Input
              required
              value={branch.spv_name}
              onChange={(e) => {
                const re = /^(?! |.* {2})[a-zA-Z ]{0,24}$/;
                if (e.target.value === "" || re.test(e.target.value)) {
                  setBranch("spv_name", toTitleCase(e.target.value));
                }
              }}
              type="text"
              className="mt-1"
              placeholder="Sulistyo"
            />
          </Label>
          <Label>
            <div className="mb-1">SPV Phone Number</div>
            <Input
              required
              value={branch.spv_phonenumber}
              onChange={(e) => {
                const re = /^[0-9\b]{0,13}$/;
                if (e.target.value === "" || re.test(e.target.value)) {
                  setBranch("spv_phonenumber", e.target.value);
                }
              }}
              type="text"
              className="mt-1"
              placeholder="081234567890"
            />
          </Label>
          <Label>
            <div className="mb-1">Status</div>
            <ToggleSwitch
              checked={branch.status}
              onChange={(e) => setBranch("status", e.target.checked)}
              withLabel
              labelFalse="DRAFT"
              labelTrue="PUBLISH"
            />
          </Label>
        </ModalBody>
        <ModalFooter className="flex-col-reverse gap-2">
          <div className="w-full sm:w-auto block">
            <Button
              layout="outline"
              className="w-full sm:w-auto"
              onClick={() => {
                onCloseModal();
                setBranch("reset");
              }}
            >
              Cancel
            </Button>
          </div>
          <div className="w-full sm:w-auto block">
            <Button type="submit" className="w-full sm:w-auto">
              Create
            </Button>
          </div>
        </ModalFooter>
      </form>
    </Modal>
  );
};

export default Create;
