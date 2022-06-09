import React, { useCallback } from 'react';

import useTranslation from 'next-translate/useTranslation';

import { BulletPoints, Description, SubTitle, Title } from '~/components';
import { generateArray } from '~/helpers';

import Container from './styles';

const Main: React.FC = () => {
  const { t } = useTranslation('index');

  const generateTitleTReference = useCallback(
    (titleId) => `main.${titleId}.title`,
    []
  );

  const generateSubTitleTReference = useCallback(
    (titleId, subTitleId) => `main.${titleId}.contents.${subTitleId}.title`,
    []
  );

  const generateContentTReference = useCallback(
    (titleId, subTitleId, contentId) =>
      `main.${titleId}.contents.${subTitleId}.subContents.${contentId}.title.0`,
    []
  );

  return (
    <Container>
      {generateArray(2).map((titleId) => {
        const titleTReference = generateTitleTReference(titleId);

        return (
          t(titleTReference) !== titleTReference && (
            <>
              <Title id={titleId} />

              {generateArray(2).map((subTitleId) => {
                const subTitleTReference = generateSubTitleTReference(
                  titleId,
                  subTitleId
                );

                return (
                  t(subTitleTReference) !== subTitleTReference && (
                    <>
                      <SubTitle id={subTitleId} titleId={titleId} />

                      {generateArray(4).map((contentId) => {
                        const contentTReference = generateContentTReference(
                          titleId,
                          subTitleId,
                          contentId
                        );

                        return (
                          t(contentTReference) !== contentTReference && (
                            <>
                              <Description
                                id={contentId}
                                titleId={titleId}
                                subTitleId={subTitleId}
                              />

                              <BulletPoints
                                id={contentId}
                                titleId={titleId}
                                subTitleId={subTitleId}
                              />
                            </>
                          )
                        );
                      })}
                    </>
                  )
                );
              })}
            </>
          )
        );
      })}
    </Container>
  );
};

export default Main;
