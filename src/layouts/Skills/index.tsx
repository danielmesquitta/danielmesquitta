import React from 'react';

import useTranslation from 'next-translate/useTranslation';

import { generateArray } from '~/helpers';

import Container from './styles';

const Skills: React.FC = () => {
  const { t } = useTranslation('index');

  return (
    <Container>
      <h2>{t('skills.title')}</h2>
      {generateArray(3).map((index) => (
        <>
          <div>
            <h3>{t(`skills.contents.${index}.subTitle`)}</h3>
            <p>{t(`skills.contents.${index}.text`)}</p>
          </div>
          {index < 2 && <hr />}
        </>
      ))}
    </Container>
  );
};

export default Skills;
