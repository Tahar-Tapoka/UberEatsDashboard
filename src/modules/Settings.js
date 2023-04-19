import { Button, Card, Form, Input } from "antd";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import { API_KEY } from "../googleApiKey";
import { useState } from "react";

const Settings = () => {
  const [address, setAddress] = useState(null);
  const [coordinates, setCoordinates] = useState(null);

  const getAddressHandler = async (address) => {
    setAddress(address);
    const geocodeAdress = await geocodeByAddress(address.label);
    const coords = await getLatLng(geocodeAdress[0]);
    setCoordinates(coords);
  };
  return (
    <Card title="Reastaurant Settings" style={{ margin: 20 }}>
      <Form wrapperCol={{ span: 15 }} layout="vertical">
        <Form.Item
          label="Reastaurant's Name"
          name="reastaurant"
          rules={[
            { required: true, message: "Please input the Reastaurant's Name" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: "Please input the Reastaurant's Address",
            },
          ]}
        >
          <GooglePlacesAutocomplete
            apiKey={API_KEY}
            selectProps={{ value: address, onChange: getAddressHandler }}
          />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <Input.TextArea rows={2} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <span>
        {coordinates?.lat} - {coordinates?.lng}{" "}
      </span>
    </Card>
  );
};
export default Settings;
