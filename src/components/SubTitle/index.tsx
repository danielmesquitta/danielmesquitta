import React from 'react';

import useTranslation from 'next-translate/useTranslation';

import Props from './types';

const SubTitle: React.FC<Props> = ({ titleId, id }) => {
  const { t } = useTranslation('index');

  return (
    <h3>
      <span />
      {t(`main.${titleId}.contents.${id}.title`)}
    </h3>
  );
};

export default SubTitle;
