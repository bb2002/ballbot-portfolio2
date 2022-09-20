import {Modal} from "antd";
import "../../styles/components/common/DarkModal.css";

const DarkModal = ({ title, centered, open, onCancel, children }) => {
  return (
    <Modal
      title={title}
      centered={centered}
      open={open}
      onCancel={onCancel}>
      {children}
    </Modal>
  )
}

export default DarkModal;