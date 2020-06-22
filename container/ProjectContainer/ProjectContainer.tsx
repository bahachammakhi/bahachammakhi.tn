import React, { useState } from "react";
import { List, Space, Tag, Divider, Avatar } from "antd";

import {
  Row,
  SvgIllustration,
  Image,
  Img,
  Close,
  Wrap,
  ModalImg,
  Title,
} from "./styles";
const colors = [
  "magenta",
  "red",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "geekblue",
  "purple",
];
const ProjectContainer = ({ data, projects }) => {
  const [current, setCurrent] = useState(data.images[0]);
  const [open, setOpen] = useState(false);
  return (
    <>
      <Wrap>
        <Row>
          {" "}
          <Title>
            <h1>{data.name}</h1>
            <p>{data?.description}</p>{" "}
          </Title>
          <div>
            {data.technologies?.map((element: any) => {
              return (
                <Avatar
                  size="large"
                  src={element?.logo?.url}
                  alt={element?.name}
                />
              );
            })}
          </div>
        </Row>

        <Row>
          <div>
            <Divider style={{ borderTop: "#2a878f" }} orientation="left">
              Responsibilities
            </Divider>
            <div>
              {data?.responsibilities?.map((element: any, index: any) => {
                return <Tag color={colors[index]}>{element.name}</Tag>;
              })}
            </div>
          </div>

          <SvgIllustration
            width="400px"
            src="/static/projectcompleted.svg"
            alt="project-completed"
          />
        </Row>
        <h1>Gallery:</h1>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data?.images}
          renderItem={(item: any) => (
            <Space>
              <List.Item
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setCurrent(item);
                  setOpen(true);
                }}
              >
                <Image
                  src={item?.formats?.medium?.url}
                  alt={item?.name}
                  width="500px"
                  widthmobile="400px"
                />
              </List.Item>
            </Space>
          )}
        />
      </Wrap>
      <ModalImg display={open}>
        <Close onClick={() => setOpen(false)}>&times;</Close>
        <Img
          src={current?.formats?.medium?.url}
          alt={current?.name}
          // width="750px"
        />
      </ModalImg>
    </>
  );
};

export default ProjectContainer;
