import TitleRedBlack from "../assets/TitleRedBlack";
import Image2 from "../Pic/Group 1000005004.png";
import Image3 from "../Pic/Search Bar.svg";
import ButtonA from "../assets/ButtonA";

import postsData from "./postsData";



const ApiData = () => {

  
    let posts = postsData.map((post) => {



        return (


            <div key={post.id}>




               

                <div className="NewsDetailsBox">

                    <div className="NewsDetailsBoxLeft">

                        <div className="TitleRedBlackNewsDetails"><TitleRedBlack titleRed="" MainTitle={post.MainTitle} /></div>



                        <div className="NewsDetailsDateTitleAurthur">
                            <p className="NewsDetailsDateTitleAurthurP">{post.published}<span className="pointOrange" />{post.Type} <span className="pointOrange" /> {post.author} </p>
                        </div>

                        <img className="NewsDetailsPic" src={post.imageUrl} alt="Articles Pic" />


                        <p className="NewsDetailsBoxLeftPtext">{post.NewsDetailsBoxLeftPtext_1}</p>

                        <p className="NewsDetailsBoxLeftPtext"> {post.NewsDetailsBoxLeftPtext_2}</p>

                        <p className="NewsDetailsBoxLeftPtext">{post.NewsDetailsBoxLeftPtext_3}</p>


                        <p className="NewsDetailsBoxLeftPtext">{post.NewsDetailsBoxLeftPtext_4}</p>



                        <div className="DivNewsTwoPic2">

                            <img className="NewsTwoPic2" src={Image2} alt="Articles Pic" />

                            <h5>{post.NewsDetailsBoxLeftPtext_5}</h5>
                        </div>


                        <p className="NewsDetailsBoxLeftPtext">{post.NewsDetailsBoxLeftPtext_6} </p>





                        <div className="ButtonAG">

                            <ButtonA text={post.ButtonA_1} className="btn-gray" iconClassName="" />
                            <ButtonA text={post.ButtonA_2} className="btn-gray" iconClassName="" />
                            <ButtonA text={post.ButtonA_3} className="btn-gray" iconClassName="" />
                            <ButtonA text={post.ButtonA_4} className="btn-gray" iconClassName="" />
                            <ButtonA text={post.ButtonA_5} className="btn-gray" iconClassName="" />
                            <ButtonA text={post.ButtonA_6} className="btn-gray" iconClassName="" />

                        </div>



                    </div >




                    <div className="BoxRight">


                        <img className="SearchBox" src={Image3} alt="Articles Pic" />


                        <div className="DivBoxRightUpp">
                            <p className="RecentPosts">{post.RecentPosts}</p>
                            <p className="BoxRightline" />
                            <p className="BoxRightP">{post.RecentPosts_1}</p>
                            <p className="BoxRightDate">{post.RecentPosts_2}</p>
                            <p className="BoxRightline" />

                            <p className="BoxRightP">{post.RecentPosts_3}</p>
                            <p className="BoxRightDate">{post.RecentPosts_4}</p>
                            <p className="BoxRightline" />

                            <p className="BoxRightP">{post.RecentPosts_5}</p>
                            <p className="BoxRightDate">{post.RecentPosts_6}</p>
                            <p className="BoxRightline" />

                            <p className="BoxRightP">{post.RecentPosts_7}</p>
                            <p className="BoxRightDate">{post.RecentPosts_8}</p>
                        </div>




                        <div className="DivBoxRightDown">
                            <p className="RecentPosts">{post.CategoriesPosts}</p>
                            <p className="BoxRightline" />
                            <p className="BoxRightP">{post.CategoriesPosts_1} <span className="BoxRightS">{post.CategoriesPosts_1Numper1}</span></p>
                            <p className="BoxRightP">{post.CategoriesPosts_2} <span className="BoxRightS">{post.CategoriesPosts_2Numper1}</span></p>
                            <p className="BoxRightP">{post.CategoriesPosts_3} <span className="BoxRightS">{post.CategoriesPosts_3Numper1}</span></p>
                            <p className="BoxRightP">{post.CategoriesPosts_4} <span className="BoxRightS">{post.CategoriesPosts_4Numper1}</span></p>
                            <p className="BoxRightP">{post.CategoriesPosts_5} <span className="BoxRightS">{post.CategoriesPosts_5Numper1}</span></p>
                            <p className="BoxRightP">{post.CategoriesPosts_6} <span className="BoxRightS">{post.CategoriesPosts_6Numper1}</span></p>


                        </div>



                    </div >

                </div>



            </div>
        );
    });

    return <div>{posts}</div>;
};

export default ApiData;











