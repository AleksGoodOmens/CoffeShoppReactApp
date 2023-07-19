import "./sectionTitle.scss"
const SectionTitle = ({ clazz, content }) => {
  let clazzName = `section-title `;
  if (clazz) {
    clazzName += clazz;
  }
  

  return ( 
    <h2 className={clazzName} >{ content}</h2>
  )
}
export default SectionTitle