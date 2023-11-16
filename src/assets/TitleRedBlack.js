import ButtonA from "../assets/ButtonA";



export default function TitleRedBlack(props) {

  return (


        <>

          <section className="TitleRedBlackBox">

            <div className="box-all">

              <div className="TitleRedBlackText">

                <div>
                  <h6 className="TitleRedBlackRed">{props.titleRed}</h6>
                  <h2 className="ArticleNews-MainTitle">{props.MainTitle}</h2>
                </div>

                <div>
                  <ButtonA text={props.ButtonAText} className={props.ButtonAclassName} iconClassName={props.ButtonAiconClassName} href={props.href} />
                </div>

              </div>

            </div>

          </section>

        </>

  );

}