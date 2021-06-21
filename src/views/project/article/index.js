import React from 'react';
import { HTMLRenderer } from '@components';
import { Container, Link } from '@styles';
import { ArticleWrap, ContentWrap, ArticleText, SubHeading, LinkWrapper } from './style';

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
            <HTMLRenderer html={data.paragraphs} components={{ p: ArticleText }} />
          </div>
        </ContentWrap>
      </Container>
    </ArticleWrap>
  );
};

export default Article;
