import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Menu = () => {
    const data = useStaticQuery(graphql`
    query {
        main: file(relativePath: { eq: "maingraphic.svg" }) {
          childImageSharp {
            fluid(maxWidth: 5000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    console.log(data);
    return(
        <div>
          <Img fluid={data.main.childImageSharp.fluid} />
        </div>
        // <div>
        //   <Img fluid={data.file.childImageSharp.fluid} />
        // </div>
        // <div>
        //   <Img fluid={data.file.childImageSharp.fluid} />
        // </div>
        // <div>
        //   <Img fluid={data.file.childImageSharp.fluid} />
        // </div>
    )
}



export default Menu;