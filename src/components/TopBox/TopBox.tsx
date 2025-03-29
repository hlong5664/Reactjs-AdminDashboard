import "./topbox.scss";
import { topDealUsers } from "../../data.ts";

export const TopBox = () => {
  return (
    <>
      <div className="topBox">
        <h1>Top Deals</h1>
        <div className="list">
          {topDealUsers.map((user) => (
            <div className="listItem" key={user.id}>
              <div className="user">
                <img src={user.img} alt="" />
                <div className="userTexts">
                  <span className="userName">{user.username}</span>
                  <span className="userEmail">{user.email}</span>
                </div>
              </div>
              <span className="amount">{user.amount} VND</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
