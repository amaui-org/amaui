import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHangoutVideoOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HangoutVideoOffW100'

      short_name='HangoutVideoOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M442-608h102v102L442-608Zm102 102 128-102v230L544-506Zm256 256 28 30v-528H302l28 28h470v470ZM188-748l28 28h-56v480h496L544-352H288v-256L94-802l20-20 718 718-20 20-128-128H132v-536h56Zm375 261Zm-145 9Z"/>
    </Icon>
  );
});

IconMaterialHangoutVideoOffW100.displayName = 'AmauiIconMaterialHangoutVideoOffW100';

export default IconMaterialHangoutVideoOffW100;
