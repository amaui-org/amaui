import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguageUsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageUsW100Filled'

      short_name='LanguageUs'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M212 750V402h28v320h167V402h28v348H212Zm308 0v-68h28v40h172V590H520V402h228v68h-28v-40H548v132h200v188H520Z"/>
    </Icon>
  );
});

IconMaterialLanguageUsW100Filled.displayName = 'AmauiIconMaterialLanguageUsW100Filled';

export default IconMaterialLanguageUsW100Filled;
