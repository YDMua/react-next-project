// 首页
import React from 'react'

export default class Index extends React.Component {
  render() {
    return (
      <>
        <style jsx>{`
          .header {
            height: 80px;
            line-height: 80px;
            font-size: 30px;
            color: #999;
            padding-left: 20px;
          }
          .wrap {
            display: flex;
            display: -webkit-flex;
          }
          .left {
            width: 600px;
            height: 400px;
            background: orange;
          }
          .right {
            margin-left: 20px;
            width: 230px;
            height: 200px;
            background: palevioletred;
          }
        `}</style>
        <>
          <div className="header">适配移动端</div>
          <div className="wrap">
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </>
      </>
    )
  }
}
