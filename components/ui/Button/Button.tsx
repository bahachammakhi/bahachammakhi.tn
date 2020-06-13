import React from "react";
import Link from "next/link";
interface Props {
  path: string;
  content?: string;
  width: string;
  height: string;
  executed: boolean;
}

const Button = ({ path, content, width, height, executed }: Props) => {
  return (
    <div>
      {executed ? (
        <div className="content" style={{ width: width, height: height }}>
          <h3 className="content">{content}</h3>
        </div>
      ) : (
        <Link
          href={path}
          //    style={{ textDecoration: "none", marginLeft: "60px" }}
        >
          <div className="button" style={{ width: width, height: height }}>
            <h3 className="content">{content}</h3>
          </div>
        </Link>
      )}
      <style jsx>{`
        .button {
          background-color: #2a878f;
          border-radius: 8px;
          cursor: pointer;
          box-shadow: 0 6.5px #999;
        }
        .content {
          color: white;
          text-align: center;
          padding-top: 10%;
        }
        .button:active {
          box-shadow: 0 5px #666;
          transform: translateY(4px);
        }
      `}</style>
    </div>
  );
};

export default Button;
