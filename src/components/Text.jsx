import { Typography } from "antd";
import { InfoCircleFilled } from "@ant-design/icons";
function Text() {
  const { Paragraph } = Typography;
  return (
    <Paragraph
      type="danger"
      style={{ border: "3px solid red", padding: "10px" }}
      ellipsis={{
        suffix: (
          <InfoCircleFilled
            style={{ color: "red", fontSize: "16px", marginLeft: "15px" }}
          />
        ),
      }}
    >
      One of the field is incorrect or invalid. Please, follow the examples in
      order to continue.
    </Paragraph>
  );
}

export default Text;
