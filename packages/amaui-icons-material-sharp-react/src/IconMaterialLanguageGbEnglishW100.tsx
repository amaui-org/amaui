import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguageGbEnglishW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageGbEnglishW100'

      short_name='LanguageGbEnglish'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M548 722h172l35-35v-62l-35-35H548v132Zm0-160h172l35-35v-62l-35-35H548v132ZM177 750V402h256v28H205v292h207V590h-90v-28h118v188H177Zm343 0V402h212l51 51v86l-35 35 35 35v90l-51 51H520Z"/>
    </Icon>
  );
});

IconMaterialLanguageGbEnglishW100.displayName = 'AmauiIconMaterialLanguageGbEnglishW100';

export default IconMaterialLanguageGbEnglishW100;
