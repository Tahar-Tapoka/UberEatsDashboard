import { Button, Card, Form, Input, InputNumber } from "antd";

const CreateMenuItem = () => {
  return (
    <Card title="Add a new Dish" style={{ margin: 20 }}>
      <Form wrapperCol={{ span: 10 }} layout="vertical">
        <Form.Item
          label="Dish"
          name="dish"
          rules={[
            { required: true, message: "Please input the dishe's title" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <Input.TextArea rows={2} />
        </Form.Item>

        <Form.Item
          label="Price (£)"
          name="price"
          rules={[
            { required: true, message: "Please input the dishe's price" },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
export default CreateMenuItem;
