import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShadowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShadowW100'

      short_name='Shadow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-536h140v-160h556v556H668v140H132Zm168-168h500v-500H300v500Z"/>
    </Icon>
  );
});

IconMaterialShadowW100.displayName = 'AmauiIconMaterialShadowW100';

export default IconMaterialShadowW100;
