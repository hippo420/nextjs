
export default function Home() {

  let devName = 'Gaebabja';
  let portpolio ="https://blog.naver.com/hippo420";

  return (
    <div>
      <h4 className="title">머니머니해도 Mony</h4>
      <p className="title-bar">made by {devName}</p>
      <a className="title" href ={portpolio} >portpolio</a>
      <p style={{color:'red',textAlign:'center'}}>Style속성사용</p>
    </div>
  );
}
