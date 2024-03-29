import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAodTablet = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodTablet'

      short_name='AodTablet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 11.5V10h8v1.5Zm1 3V13h6v1.5ZM1 20V4h22v16Zm5-2h12V6H6Zm-3 0h1V6H3Zm17 0h1V6h-1ZM3 6h1Zm17 0h1Z"/>
    </Icon>
  );
});

IconMaterialAodTablet.displayName = 'AmauiIconMaterialAodTablet';

export default IconMaterialAodTablet;
