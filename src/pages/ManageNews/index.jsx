import {
  Button,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
  TableRow,
} from "@windmill/react-ui";
import React, { useContext, useEffect, useState } from "react";
import { LoadingSpinner, SearchInput, Pagination } from "../../../components";
import PageTitle from "../../../components/Typography/PageTitle";
import {
  cleanBranchState,
  getBranchFilter,
  getBranchId,
  getBranchList,
  searchBranch,
} from "../../../context/actions";
import { GlobalContext } from "../../../context/GlobalState";
import { Duplicate, EditIcon, Plus, TrashIcon } from "../../../icons";
import { statusPublish } from "../../../utils";
import { handlePermissions } from '../../../utils/abilityPermissions';
import Clone from "./Clone";
import Create from "./Create";
import Delete from "./Delete";
import Edit from "./Edit";

const Branches = () => {
  const { branchState, branchDispatch } = useContext(GlobalContext);
  const {
    branchList: { data, total, isLoading, filter, page, search },
  } = branchState;

  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalCloneOpen, setIsModalCloneOpen] = useState(false);

  // pagination change control
  function onPageChangeTable(p) {
    getBranchList(p, filter[0], filter[1], search)(branchDispatch);
  }

  const openModalCreate = () => {
    setIsModalCreateOpen(true);
  };
  const closeModalCreate = () => {
    setIsModalCreateOpen(false);
  };
  const openModalEdit = (id) => {
    setIsModalEditOpen(true);
    getBranchId(id)(branchDispatch);
  };
  const closeModalEdit = () => {
    setIsModalEditOpen(false);
  };
  const openModalDelete = (id) => {
    setIsModalDeleteOpen(true);
    getBranchId(id)(branchDispatch);
  };
  const closeModalDelete = () => {
    setIsModalDeleteOpen(false);
  };
  const openModalClone = (id) => {
    setIsModalCloneOpen(true);
    getBranchId(id)(branchDispatch);
  };
  const closeModalClone = () => {
    setIsModalCloneOpen(false);
  };

  const onHandleFilter = (e) => {
    let val = e.target.value;
    const arr = val.split("&");
    getBranchFilter(arr)(branchDispatch);
  };

  useEffect(() => {
    getBranchList(page, filter[0], filter[1], search)(branchDispatch);
  }, [filter, branchDispatch, search]);

  useEffect(() => {
    return () => {
      cleanBranchState()(branchDispatch);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <PageTitle>Branches</PageTitle>
        <div className="flex flex-col md:flex-row gap-3 items-center ">
          <div className="md:w-2/5">
            <SearchInput
              value={search}
              onChange={(e) =>
                searchBranch(e.target.value, page)(branchDispatch)
              }
            />
          </div>
          <div className="w-full md:w-2/5">
            <Select
              value={`${filter[0]}&${filter[1]}`}
              onChange={onHandleFilter}
            >
              <option value="dealer&DESC">Dealer (z-a)</option>
              <option value="dealer&ASC">Dealer (a-z)</option>
              <option value="spv_name&DESC">SPV Name (z-a)</option>
              <option value="spv_name&ASC">SPV Name (a-z)</option>
              <option value="branch_name&DESC">Branch (z-a)</option>
              <option value="branch_name&ASC">Branch (a-z)</option>
              <option value="branch_code&DESC">Branch Code (z-a)</option>
              <option value="branch_code&ASC">Branch Code (a-z)</option>
              <option value="id&DESC">Newest</option>
              <option value="id&ASC">Oldest</option>
            </Select>
          </div>
          {handlePermissions().map((permissions) => (
            permissions === 'create_master-branch' ?
              <Button
                className="w-full md:w-auto"
                onClick={openModalCreate}
                iconLeft={Plus}
              >
                Add
              </Button>
              : null))}
        </div>
      </div>

      <TableContainer className="mb-8">
        {isLoading ? (
          <LoadingSpinner height={400} />
        ) : (
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Dealer</TableCell>
                <TableCell>Branch</TableCell>
                <TableCell>Branch Code</TableCell>
                <TableCell>SPV Name</TableCell>
                <TableCell>SPV Phone</TableCell>
                <TableCell className="text-center">Status</TableCell>
                <TableCell className="text-center">Actions</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {data.map((item, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <div className="flex items-center text-sm">
                      <div>
                        <span className="text-sm">{item.dealer}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center text-sm">
                      <div>
                        <span className="text-sm">{item.branch_name}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center text-sm">
                      <div>
                        <span className="text-sm">{item.branch_code}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center text-sm">
                      <div>
                        <span className="text-sm">{item.spv_name}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center text-sm">
                      <div>
                        <span className="text-sm">{item.spv_phonenumber}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    {statusPublish(item.status)}
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex justify-center items-center space-x-4">

                      {handlePermissions().map((permissions) => (
                        permissions === 'update_master-branch' ?
                          <Button
                            icon={EditIcon}
                            layout="outline"
                            aria-label="Edit"
                            onClick={() => openModalEdit(item.id)}
                          ></Button>
                          : null))}
                      {handlePermissions().map((permissions) => (
                        permissions === 'create_master-branch' ?

                          <Button
                            icon={Duplicate}
                            layout="outline"
                            aria-label="Clone"
                            onClick={() => openModalClone(item.id)}
                          ></Button>
                          : null))}

                      {handlePermissions().map((permissions) => (
                        permissions === 'delete_master-branch' ?
                          <Button
                            onClick={() => openModalDelete(item.id)}
                            icon={TrashIcon}
                            layout="outline"
                            aria-label="Delete"
                          ></Button>
                          : null))}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
        <TableFooter>
          <Pagination totalResults={total} onChange={onPageChangeTable} />
        </TableFooter>
      </TableContainer>

      <Create isOpen={isModalCreateOpen} onCloseModal={closeModalCreate} />
      <Delete isOpen={isModalDeleteOpen} onCloseModal={closeModalDelete} />
      <Edit isOpen={isModalEditOpen} onCloseModal={closeModalEdit} />
      <Clone isOpen={isModalCloneOpen} onCloseModal={closeModalClone} />
    </>
  );
};

export default Branches;