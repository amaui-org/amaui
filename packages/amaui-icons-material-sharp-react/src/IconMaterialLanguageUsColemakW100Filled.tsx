import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguageUsColemakW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageUsColemakW100Filled'

      short_name='LanguageUsColemak'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M532 722h188V430H532v292Zm-320 28V402h212v28H240v292h184v28H212Zm292 0V402h244v348H504Z"/>
    </Icon>
  );
});

IconMaterialLanguageUsColemakW100Filled.displayName = 'AmauiIconMaterialLanguageUsColemakW100Filled';

export default IconMaterialLanguageUsColemakW100Filled;
