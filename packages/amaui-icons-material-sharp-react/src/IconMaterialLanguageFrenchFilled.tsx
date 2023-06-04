import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguageFrenchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageFrenchFilled'

      short_name='LanguageFrench'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 776V376h280v80H240v80h160v80H240v160h-80Zm360 0V376h240l40 40v160l-40 40h-34l74 160h-84l-75-160h-41v160h-80Zm80-240h120v-80H600v80Z"/>
    </Icon>
  );
});

IconMaterialLanguageFrenchFilled.displayName = 'AmauiIconMaterialLanguageFrenchFilled';

export default IconMaterialLanguageFrenchFilled;
