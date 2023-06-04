import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguageUsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageUsW100'

      short_name='LanguageUs'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M212 750V402h28v320h172V402h28v348H212Zm308 0v-68h28v40h172V590H520V402h228v68h-28v-40H548v132h200v188H520Z"/>
    </Icon>
  );
});

IconMaterialLanguageUsW100.displayName = 'AmauiIconMaterialLanguageUsW100';

export default IconMaterialLanguageUsW100;
