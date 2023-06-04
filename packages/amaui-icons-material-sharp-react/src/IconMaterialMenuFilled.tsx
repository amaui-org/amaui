import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMenuFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenuFilled'

      short_name='Menu'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 18v-2h18v2Zm0-5v-2h18v2Zm0-5V6h18v2Z"/>
    </Icon>
  );
});

IconMaterialMenuFilled.displayName = 'AmauiIconMaterialMenuFilled';

export default IconMaterialMenuFilled;
