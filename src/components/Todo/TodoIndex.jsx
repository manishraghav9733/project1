import React, { useState } from "react";
import {
  Input,
  Button,
  message,
  Upload,
  Icon,
  List,
  Skeleton,
  Avatar
} from "antd";

const TodoIndex = () => {
  const [todo, setTodo] = useState([
    { title: "todo1", img: "", update: false },
    { title: "todo2", img: "", update: false },
    { title: "todo3", img: "", update: false }
  ]);

  const [value, setValue] = useState("");
  const [updateValue, setUpdateValue] = useState("");

  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const onTodoInputChange = e => {
    setValue(e.target.value);
  };

  const onTodoUpdateChange = e => {
    setUpdateValue(e.target.value);
  };

  const onAddTodo = () => {
    if (
      value === "" ||
      value === " " ||
      value === null ||
      value === undefined
    ) {
      message.warning("please enter task");
      return;
    }

    if (
      imageUrl === "" ||
      imageUrl === " " ||
      imageUrl === null ||
      imageUrl === undefined
    ) {
      message.warning("please upload Avatar");
      return;
    }
    setLoading(true);

    let tempList = [];
    tempList = [
      ...todo,
      {
        title: value,
        img: imageUrl,
        update: false
      }
    ];
    // console.log(tempList);
    setTodo(tempList);
    setValue("");
    setLoading(false);
    setImageLoading(false);
  };

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  const handleChange = info => {
    setImageLoading(true);
    getBase64(info.file.originFileObj, imageUrl => setImageUrl(imageUrl));
  };

  const onDeleteTodo = (data, index) => {
    setLoading(true);
    let tempList = [...todo];
    tempList.splice(index, 1);
    setTodo(tempList);
    setLoading(false);
  };

  const onUpdate = (data, index) => {
    setUpdateValue(data.title);
    let tempList = [...todo];
    //setUpdate(!update);

    tempList.map((item, i) => {
      if (index === i) {
        tempList[i] = {
          ...tempList[i],
          update: true
        };
      }
    });
    setTodo(tempList);
  };

  const onSave = (data, index) => {
    setLoading(true);
    let tempList = [...todo];
    //setUpdate(!update);

    tempList.map((item, i) => {
      if (index === i) {
        tempList[i] = {
          ...tempList[i],
          title: updateValue,
          update: false
        };
      }
    });
    message.success("updated successfully");
    setTodo(tempList);
    setLoading(false);
  };

  const uploadProps = {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange: handleChange,
    showUploadList: imageLoading
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <div
        style={{
          marginBottom: "50px",
          textAlign: "center",
          maxWidth: "520px",
          margin: "auto"
        }}
      >
        <Input
          value={value}
          // style={{ width: "40%" }}
          onChange={onTodoInputChange}
        />

        <div style={{ marginTop: "30px" }}>
          <Upload {...uploadProps}>
            <Button>
              <Icon type="upload" /> Upload
            </Button>
          </Upload>
        </div>

        <div style={{ marginTop: "30px" }}>
          <Button onClick={onAddTodo} type="primary">
            Add Todo
          </Button>
        </div>
      </div>

      {/*MAP FOR RENDERING TODO LIST START */}
      <div style={{ width: "80%", margin: "auto" }}>
        <List
          className="demo-loadmore-list"
          itemLayout="horizontal"
          dataSource={todo}
          renderItem={(item, i) => (
            <List.Item
              actions={[
                <Button onClick={() => onDeleteTodo(item, i)} type="link">
                  Delete
                </Button>,
                item.update === false ? (
                  <Button onClick={() => onUpdate(item, i)} type="link">
                    Update
                  </Button>
                ) : (
                  <Button onClick={() => onSave(item, i)} type="link">
                    Save
                  </Button>
                )
              ]}
            >
              <Skeleton avatar title={false} loading={loading} active>
                <List.Item.Meta
                  avatar={<Avatar src={item.img} />}
                  title={
                    <span>
                      {item.update === false ? (
                        item.title
                      ) : (
                        <Input
                          value={updateValue}
                          style={{ width: "40%" }}
                          onChange={onTodoUpdateChange}
                        />
                      )}
                    </span>
                  }
                />
              </Skeleton>
            </List.Item>
          )}
        />
        {/*
        <ul style={{ listStyle: "none" }}>
          {todo.map((item, i) => (
            <li style={{ fontSize: "22px", padding: "6px" }} key={i}>
              {item.update === false ? (
                item.title
              ) : (
                <Input
                  value={updateValue}
                  style={{ width: "40%" }}
                  onChange={onTodoUpdateChange}
                />
              )}
              <span>
                {item.img === "" ? null : (
                  <img
                    src={item.img}
                    alt="avatar"
                    style={{ width: 30, height: 30 }}
                  />
                )}
              </span>
              <span>
                <Button onClick={() => onDeleteTodo(item, i)} type="link">
                  Delete
                </Button>
              </span>
              <span>
                {item.update === false ? (
                  <Button onClick={() => onUpdate(item, i)} type="link">
                    Update
                  </Button>
                ) : (
                  <Button onClick={() => onSave(item, i)} type="link">
                    Save
                  </Button>
                )}
              </span>
            </li>
          ))}
        </ul>
                */}
      </div>
      {/*MAP FOR RENDERING TODO LIST ENDS */}
    </div>
  );
};

export default TodoIndex;
