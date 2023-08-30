import * as Dialog from '@radix-ui/react-dialog';
import { IoMdClose } from 'react-icons/io';

const Modal = ({ isOpen, onChange, title, description, children }) => {
  return (
    <Dialog.Root
      open={isOpen}
      defaultOpen={isOpen}
      onOpenChange={onChange}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="backdrop-blur-sm fixed inset-0" />
        <Dialog.Content
          className="
        absolute
        drop-shadow-md 
        top-[50%]
        left-[713px] 
        max-h-full 
        translate-x-[-50%] 
        translate-y-[-50%] 
        focus:outline-none
        "
        >
          <div>{children}</div>
          {/* <Dialog.Close asChild>
            <button className="text-gray2 hover:text-white absolute top-[10px] right-[10px] h-[25px] w-[25px] appearance-none items-center rounded-full focus:outline-none">
              <IoMdClose />
            </button>
          </Dialog.Close> */}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
