import React, { useCallback } from 'react';

import useTranslation from 'next-translate/useTranslation';

import { generateArray } from '~/helpers';

import Container from './styles';
import Props from './types';

const BulletPoints: React.FC<Props> = ({ id, subTitleId, titleId }) => {
  const { t } = useTranslation('index');

  const generateTReference = useCallback(
    (index: number) =>
      `main.${titleId}.contents.${subTitleId}.subContents.${id}.texts.${index}`,
    [id, subTitleId, titleId]
  );

  return (
    <Container>
      {generateArray(4).map(
        (index) =>
          t(generateTReference(index)) !== generateTReference(index) && (
            <li>
              <span />
              {t(generateTReference(index))}
            </li>
          )
      )}
    </Container>
  );
};

export default BulletPoints;
