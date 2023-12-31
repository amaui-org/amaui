import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShadowAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShadowAddW100'

      short_name='ShadowAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M546-426v-120H426v-28h120v-120h28v120h120v28H574v120h-28ZM132-132v-536h140v-160h556v556H668v140H132Zm168-168h500v-500H300v500Z"/>
    </Icon>
  );
});

IconMaterialShadowAddW100.displayName = 'AmauiIconMaterialShadowAddW100';

export default IconMaterialShadowAddW100;
