import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShadowMinusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShadowMinusW100Filled'

      short_name='ShadowMinus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-536h140v-160h556v556H668v140H132Zm168-168h500v-500H300v500Zm126-246v-28h268v28H426Z"/>
    </Icon>
  );
});

IconMaterialShadowMinusW100Filled.displayName = 'AmauiIconMaterialShadowMinusW100Filled';

export default IconMaterialShadowMinusW100Filled;
