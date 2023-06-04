import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeHealthFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeHealthFilled'

      short_name='HomeHealth'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 17h3v-2.5H16v-3h-2.5V9h-3v2.5H8v3h2.5ZM4 21V9l8-6 8 6v12Z"/>
    </Icon>
  );
});

IconMaterialHomeHealthFilled.displayName = 'AmauiIconMaterialHomeHealthFilled';

export default IconMaterialHomeHealthFilled;
