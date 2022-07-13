import {
  Button,
  Input,
  Label,
  ModalBody,
  ModalFooter,
  Select,
} from "@windmill/react-ui";
import React from "react";
import {ToggleSwitch} from "../../../components";
import {toTitleCase} from "../../../helpers";

const FormEditClone = ({
  onHandleSubmit,
  onCloseModal,
  newBranchList,
  setNewBranchList,
  textSubmit,
}) => {
  const onChange = (key, newValue) => {
    setNewBranchList({...newBranchList, [key]: newValue});
  };

  return (
    <form action="" onSubmit={onHandleSubmit}>
      <ModalBody className="flex flex-col gap-4 my-8">
        <Label>
          <span>Dealer</span>
          <Select
            value={newBranchList.dealer}
            onChange={(e) => onChange("dealer", e.target.value)}
            className="mt-1"
            required
          >
            <option value="DSO">DSO</option>
            <option value="TSO">TSO</option>
          </Select>
        </Label>
        <Label>
          <span>Branch Name</span>
          <Input
            required
            value={newBranchList.branch_name}
            onChange={(e) => {
              const re = /^(?! |.* {2})[\s\S]{0,24}$/;
              if (e.target.value === "" || re.test(e.target.value)) {
                onChange("branch_name", e.target.value);
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
            value={newBranchList.branch_code}
            onChange={(e) => {
              const re = /^(?! |.* )[a-zA-Z0-9]{0,6}$/;
              if (e.target.value === "" || re.test(e.target.value)) {
                onChange("branch_code", e.target.value.toUpperCase());
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
            value={newBranchList.spv_name}
            onChange={(e) => {
              const re = /^(?! |.* {2})[a-zA-Z ]{0,24}$/;
              if (e.target.value === "" || re.test(e.target.value)) {
                onChange("spv_name", toTitleCase(e.target.value));
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
            value={newBranchList.spv_phonenumber}
            onChange={(e) => {
              const re = /^[0-9\b]{0,13}$/;
              if (e.target.value === "" || re.test(e.target.value)) {
                onChange("spv_phonenumber", e.target.value);
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
            checked={newBranchList.status}
            onChange={(e) => onChange("status", e.target.checked)}
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
            onClick={onCloseModal}
          >
            Cancel
          </Button>
        </div>
        <div className="w-full sm:w-auto block">
          <Button type="submit" className="w-full sm:w-auto">
            {textSubmit}
          </Button>
        </div>
      </ModalFooter>
    </form>
  );
};

export default FormEditClone;
