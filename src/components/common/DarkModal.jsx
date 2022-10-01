import {Modal} from "antd";
import "../../styles/components/common/DarkModal.css";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DarkModal = ({ title, centered, open, onCancel, children }) => {
  return (
    <Modal
      width={700}
      title={title}
      centered={centered}
      open={open}
      onCancel={onCancel}>
      {children}
    </Modal>
  )
}

export default DarkModal;