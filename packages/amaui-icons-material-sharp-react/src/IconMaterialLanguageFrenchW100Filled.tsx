import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguageFrenchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageFrenchW100Filled'

      short_name='LanguageFrench'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M212 750V402h228v28H240v132h160v28H240v160h-28Zm308 0V402h177l51 51v96l-51 51h-33l84 150h-31l-85-150h-84v150h-28Zm28-178h137l35-35v-72l-35-35H548v142Z"/>
    </Icon>
  );
});

IconMaterialLanguageFrenchW100Filled.displayName = 'AmauiIconMaterialLanguageFrenchW100Filled';

export default IconMaterialLanguageFrenchW100Filled;
