import "./pageTitle.scss"
const PageTitle = ({ articleClazz, clazz, content="New page" }) => {
  let articleClazzName = `page-header `;
  let clazzName = `page-title `;
  if (clazz) {
    clazzName += clazz;
  }
  if (articleClazz) {
    articleClazzName += articleClazz;
  }
  

  return ( 
    <article className={articleClazzName}>
    <h1 className={clazzName} >{ content}</h1>
    </article>
  )
}
export default PageTitle