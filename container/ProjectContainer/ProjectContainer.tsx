import React, { useState } from "react";
import { List, Space, Tag, Divider, Avatar } from "antd";
import Link from "next/link";
import {
  LinkOutlined,
  GithubOutlined,
  RightCircleOutlined,
  LeftCircleOutlined,
} from "@ant-design/icons";
import { Preview, Cover } from "../../components/ui/MacPreview/MarcPreview";
import ItemsCarousel from "react-items-carousel";
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
import { InterButtonOnHover } from "../../components/ui/Inter2Button/Inter2Button";
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
  const [activeitem, changeActiveItem] = useState(0);
  return (
    <>
      <Wrap>
        <div style={{ marginRight: "10vw", display: "flex", flexWrap: "wrap" }}>
          {data?.link ? (
            <InterButtonOnHover target link={data?.link}>
              <LinkOutlined />
            </InterButtonOnHover>
          ) : (
            <></>
          )}
          {data?.github_link ? (
            <InterButtonOnHover target link={data?.github_link}>
              <GithubOutlined />
            </InterButtonOnHover>
          ) : (
            <></>
          )}
        </div>
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

        <ItemsCarousel
          // Placeholder configurations
          enablePlaceholder
          numberOfPlaceholderItems={5}
          minimumPlaceholderTime={1000}
          placeholderItem={
            <div style={{ height: 200, background: "#900" }}>Placeholder</div>
          }
          // Carousel configurations
          numberOfCards={2}
          gutter={12} // change to 1 for mobile 12 for desktop
          showSlither={true}
          firstAndLastGutter={true}
          freeScrolling={false}
          // Active item configurations
          requestToChangeActive={(item: any) => changeActiveItem(item)}
          activeItemIndex={activeitem}
          activePosition={"center"}
          chevronWidth={24}
          rightChevron={<RightCircleOutlined style={{ fontSize: "30px" }} />}
          leftChevron={<LeftCircleOutlined style={{ fontSize: "30px" }} />}
          outsideChevron={false}
        >
          {projects.map((element: any) => {
            return (
              <Link href={`/projects/${element?._id}`}>
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {" "}
                  <Preview
                    src={"/static/macframe.png"}
                    width="400px"
                  ></Preview>{" "}
                  <Cover
                    // left="3.8vw"
                    // top="-33vh"
                    left="3.8vw"
                    top="12px"
                    width="300px"
                    src={element?.cover?.url}
                  />
                </div>
              </Link>
            );
          })}
        </ItemsCarousel>
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
