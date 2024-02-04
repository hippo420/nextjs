export default function List() {
    //폴더만들고 page.js만들면 오토 라우팅됨!!!!

    let items = [
                {name:'아이폰',img:'iphone.png'}
                ,{name:'갤럭시',img:'galaxy.png'}
                ,{name:'아이패드',img:'ipad.png'}
                ]

//    let imgs = ['iphone.png','galaxy.png','ipad.png']
    return (
    <div>
        <h2 className="title">상품목록</h2>
        {
            items.map((item,i)=>{
            return(
                <div key={i} >
                    <img className="item-img" src={item.img}  />
                    <h4 className="item" >
                        {item.name} $40
                    </h4>
                </div>
            );
            })
        }

    </div>
    );
}