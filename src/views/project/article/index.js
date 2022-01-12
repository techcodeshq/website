import React from 'react';
import { HTMLRenderer } from '@components';
import { Container, Link } from '@styles';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
  ArticleWrap,
  ContentWrap,
  ArticleText,
  ArticleLink,
  SubHeading,
  LinkWrapper,
  ImagesWrap,
  ImageWrapper,
  SplitWrapper,
} from './style';

const Article = ({ data }) => {
  return (
    <ArticleWrap>
      <Container>
        <ContentWrap>
          <LinkWrapper>
            {data.content.map((slice, index) => {
              const typename = slice.__typename;

              switch (typename) {
                case 'DatoCmsArticleLink':
                  return (
                    <Link href={slice.link} target="_blank" key={index}>
                      {slice.name}
                    </Link>
                  );
                default:
                  return null;
              }
            })}
          </LinkWrapper>
          <div>
            {data.content.map((slice, index) => {
              const typename = slice.__typename;

              switch (typename) {
                case 'DatoCmsArticleSubheading':
                  return <SubHeading key={index}>{slice.text}</SubHeading>;
                default:
                  return null;
              }
            })}
            <HTMLRenderer html={data.paragraphs} components={{ p: ArticleText, a: ArticleLink }} />
          </div>
        </ContentWrap>
        <ImagesWrap>
          {data.images.map((slice, index) => {
            console.log(slice);
            const typename = slice.__typename;

            switch (typename) {
              case 'DatoCmsFullImage':
                return (
                  <ImageWrapper key={index}>
                    <GatsbyImage image={slice.image.gatsbyImageData} alt={slice.image.alt} />
                  </ImageWrapper>
                );
              case 'DatoCmsSplitImage':
                return (
                  <SplitWrapper uneven={slice.unevenSplit} key={index}>
                    <GatsbyImage
                      image={slice.leftImage.gatsbyImageData}
                      alt={slice.leftImage.alt}
                    />
                    <GatsbyImage
                      image={slice.rightImage.gatsbyImageData}
                      alt={slice.rightImage.alt}
                    />
                  </SplitWrapper>
                );
              default:
                return null;
            }
          })}
        </ImagesWrap>
      </Container>
    </ArticleWrap>
  );
};

export default Article;
