import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHangoutVideoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HangoutVideoW100Filled'

      short_name='HangoutVideo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M288-352h256v-102l128 102v-256L544-506v-102H288v256ZM132-212v-536h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialHangoutVideoW100Filled.displayName = 'AmauiIconMaterialHangoutVideoW100Filled';

export default IconMaterialHangoutVideoW100Filled;
