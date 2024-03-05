"use client"

import DataJson from "@/data/db.json"
import {useState} from "react";
import Post from "@/containers/Posts";
import {Col, Form, Input, Row, Space, notification } from "antd";
import Button from "@/components/Button";
import { Modal } from 'antd';

export default function Home() {
  const [data, setData] = useState(DataJson)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm()
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: 'Notification Title',
      description:
        'Create Post Success.',
      className: 'custom-class',
      style: {
        width: 600,
      },
    });
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onSubmitForm = (values) => {
    setData([...data, {...values}])
    form.resetFields()
    setIsModalOpen(false)
    openNotification()
  }
  return (
    <main>
      <div className="container">
        {contextHolder}
        {
          isModalOpen && (
            <Modal title="Thêm mới bài viết" footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <Form form={form} onFinish={onSubmitForm} layout={"vertical"}>
                <Form.Item
                  label="Title"
                  name="title"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your title!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Body"
                  name="body"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your body!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Space>
                  <Button type={"primary"} htmlType={"submit"} title={"Thêm mới"}/>
                </Space>
              </Form>
            </Modal>
          )
        }
        <Row gutter={[20,20]}>
          <Col span={24}>
            <Button type={"primary"} title={"Thêm mới"} onClick={showModal} />
          </Col>
          {
            data && data.map((post) => {
              return (
                <Col sm={{ span: 8 }} key={post.id}>
                  <Post title={post.title} description={post.body}/>
                </Col>
              )
            })
          }
        </Row>
      </div>
    </main>
  );
}
