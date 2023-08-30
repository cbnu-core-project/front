import { useRecoilState } from "recoil";
import { userApplicationFormModalState } from "../../store";
import Modal from "../Modal";
import UserApplicationForm from "./UserApplicationForm";

const UserApplicationFormModal = () => {
  const [isOpen, setIsOpen] = useRecoilState(userApplicationFormModalState)
  
  const onChange = (open) => {
    if (!open) {
      setIsOpen(false);
    }
  };


  return (
    <Modal
      isOpen={isOpen}
      onChange={onChange}
    >
      <UserApplicationForm />
    </Modal>
  );
}

export default UserApplicationFormModal;
