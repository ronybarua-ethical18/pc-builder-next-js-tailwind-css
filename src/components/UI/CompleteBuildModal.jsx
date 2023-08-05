import React, { useState } from "react";
import { Button, Modal, Rate } from "antd";
import { useSelector } from "react-redux";
const CompleteBuildModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { pcBuilderComponents } = useSelector((state) => state.product);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button
        disabled={pcBuilderComponents?.length < 5}
        className="bg-blue-500 text-white"
        type="primary"
        onClick={showModal}
      >
        Complete Build
      </Button>
      <Modal
        title="PC Build Components"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h1 className="text-md font-extralight">
          Now you are ready to build your pc with following components.
        </h1>
        {pcBuilderComponents?.map((component) =>(
            <div key={component.key}>
          <div className="shadow p-4 mt-2 flex items-center justify-between border border-blue-400">
            <div>
              <h2 className="text-xl font-medium">{component.productname}</h2>
              <p className="">{component.description}</p>
              <Rate value={component.averagerating} />
            </div>
            <h3 className="text-2xl text-green-500">Tk. {component.price}</h3>
          </div>
        </div>
        ))}
      </Modal>
    </>
  );
};
export default CompleteBuildModal;
