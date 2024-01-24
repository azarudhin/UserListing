import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserList({ isList }) {
  let navigate = useNavigate();
  console.log("isList", isList);
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <div className="user_list_page">
        <div className="user_listing_table">
          {/* <div style={{display:'flex',flexDirection:'row',flexWrap:'nowrap',alignItems:'flex-start',gap:'30px'}}> */}

          <div>
            <img
              src={isList.avatar_url}
              style={{ width: "100%", height: "100%",borderRadius:'15px' }}
            />
          </div>
          <div className="changed_file">
            <div>
              <div
                style={{ display: "flex", alignItems: "baseline", gap: "5px" }}
              >
                <p style={{ fontSize: "24px" }}>{isList.login}</p>
                <p></p>
              </div>
              <h2 style={{ fontSize: "28px" }}>{isList.login}</h2>
              <div>
                <h3 style={{ fontSize: "24px" }}>Summary</h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "2px 0px",
                  }}
                >
                  <p style={{ fontSize: "20px", fontWeight: "500" }}>
                    Followers :
                  </p>
                  <p style={{ fontSize: "20px", fontWeight: "600" }}>
                    {isList &&
                      isList?.followers_url &&
                      isList?.followers_url?.length}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "2px 0px",
                  }}
                >
                  <p style={{ fontSize: "20px", fontWeight: "500" }}>
                    Following :
                  </p>
                  <p style={{ fontSize: "20px", fontWeight: "600" }}>
                    {isList &&
                      isList?.following_url &&
                      isList?.following_url?.length}
                  </p>
                </div>
                {/* <div style={{display:'flex',alignItems:'center',gap:'5px',padding:'2px 0px'}} >
            <p>repos  :</p>
            <p>{isList.following_url.length}</p>
        </div> */}
              </div>
              <div>
                <h3 style={{ fontSize: "28px" }}>Extended Profile</h3>
                {/* <div style={{display:'flex',alignItems:'center',gap:'5px',padding:'2px 0px'}} >
            <p>Company :</p>
            <p>{isList.organizations_url}</p>
        </div> */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2px",
                    padding: "2px 0px",
                  }}
                >
                  <p style={{ fontSize: "16px", fontWeight: "600" }}>
                    Social Handle :
                  </p>
                  <p style={{ fontSize: "16px", fontWeight: "700" }}>
                    {isList.html_url}
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "end",
              }}
            >
              <button
                class="button-50"
                role="button"
                onClick={() => navigate("/")}
              >
                Go-Back
              </button>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
