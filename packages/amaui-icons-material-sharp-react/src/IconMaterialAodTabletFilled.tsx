import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAodTabletFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodTabletFilled'

      short_name='AodTablet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 11.5V10h8v1.5Zm1 3V13h6v1.5ZM1 20V4h22v16Zm5-2h12V6H6Z"/>
    </Icon>
  );
});

IconMaterialAodTabletFilled.displayName = 'AmauiIconMaterialAodTabletFilled';

export default IconMaterialAodTabletFilled;
