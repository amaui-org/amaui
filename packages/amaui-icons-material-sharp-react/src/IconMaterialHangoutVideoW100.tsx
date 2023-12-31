import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHangoutVideoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HangoutVideoW100'

      short_name='HangoutVideo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M288-352h256v-102l128 102v-256L544-506v-102H288v256ZM132-212v-536h696v536H132Zm28-28h640v-480H160v480Zm0-480v480-480Z"/>
    </Icon>
  );
});

IconMaterialHangoutVideoW100.displayName = 'AmauiIconMaterialHangoutVideoW100';

export default IconMaterialHangoutVideoW100;
