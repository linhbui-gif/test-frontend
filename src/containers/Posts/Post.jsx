const Post = ({ title, description }) => {
   return (
     <div className={"post"}>
       <div className="post__image">
         <img src="https://placehold.co/600x400" alt=""/>
       </div>
       <div className="post__body">
         <h3 className="post__title">{title}</h3>
         <p className="post__description">{description}</p>
       </div>
     </div>
   )
}
export default Post