import { SiYoutubeshorts } from "react-icons/si";
import { RiHome5Fill, RiVideoLine } from "react-icons/ri";
import { MdExplore, MdOutlineWatchLater } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";

import "./style/SiderBar.scss";

const SiderBarPage = () => {
  // sider-bar-one
  const sideBar = [
    {
      id: 1,
      name: "Home",
      icon: <RiHome5Fill />,
    },
    {
      id: 2,
      name: "Explore",
      icon: <MdExplore />,
    },
    {
      id: 3,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 4,
      name: "Subscriptions",
      icon: <img src="/public/icons/ytLibary.svg" alt="ytLibary" />,
    },
  ];
  // side-bar-two
  const sideBarTwo = [
    {
      id: 1,
      name: "Libary",
      icon: <img src="/public/icons/libary.svg" alt="libary" />,
    },
    {
      id: 2,
      name: "History",
      icon: <GoHistory />,
    },
    {
      id: 3,
      name: "Your videos",
      icon: <RiVideoLine />,
    },
    {
      id: 4,
      name: "Watch later",
      icon: <MdOutlineWatchLater />,
    },

    {
      id: 5,
      name: "Popular",
      icon: <img src="/public/icons/pop.svg" alt="pop" />,
    },
  ];
  // users
  const users = [
    {
      id: 1,
      name: "User 1",
      avatar: "/public/icons/avatar.svg",
    },
    {
      id: 2,
      name: "User 2",
      avatar: "/public/icons/avatar.svg",
    },
    {
      id: 3,
      name: "User 3",
      avatar: "/public/icons/avatar.svg",
    },
    {
      id: 4,
      name: "User 4",
      avatar: "/public/icons/avatar.svg",
    },
  ];
  return (
    <div className="sider-bar">
      <div className="big_father">
        {/* 1 */}
        <div className="side-father">
          <div className="side">
            {sideBar.map((item) => {
              return (
                <div key={item.id} className="side-item">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
        <hr />
        {/* 2 */}
        <div className="side-father-two">
          <div className="side">
            {sideBarTwo.map((item) => {
              return (
                <div key={item.id} className="side-two">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <hr />
      {/* 3 */}
      <div className="subscription">
        <h2>SUBSCRIPTIONS</h2>
        <div className="subsc">
          <div className="subc-items">
            {users.map((user) => {
              return (
                <div key={user.id} className="subc-item">
                  <RxAvatar size={40} src={user.avatar} alt={user.name} />
                  <span>{user.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiderBarPage;
