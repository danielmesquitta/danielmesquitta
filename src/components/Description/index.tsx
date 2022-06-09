import React from 'react';

import useTranslation from 'next-translate/useTranslation';

import Container from './styles';
import Props from './types';

const Description: React.FC<Props> = ({ id, subTitleId, titleId }) => {
  const { t } = useTranslation('index');

  return (
    <Container>
      <hr />
      <strong>
        {t(`main.${titleId}.contents.${subTitleId}.subContents.${id}.title.0`)}
      </strong>
      {` - ${t(
        `main.${titleId}.contents.${subTitleId}.subContents.${id}.title.1`
      )}`}
    </Container>
  );
};

export default Description;
