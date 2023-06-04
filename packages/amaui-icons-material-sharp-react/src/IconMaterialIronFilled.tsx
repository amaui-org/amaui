import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIronFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IronFilled'

      short_name='Iron'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 18v-3q0-1.65 1.175-2.825Q4.35 11 6 11h9V9H9v1H7V7h10v7h1V6h4v2h-2v8h-3v2Z"/>
    </Icon>
  );
});

IconMaterialIronFilled.displayName = 'AmauiIconMaterialIronFilled';

export default IconMaterialIronFilled;
