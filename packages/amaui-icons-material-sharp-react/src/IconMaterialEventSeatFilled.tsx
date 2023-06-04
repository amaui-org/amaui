import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEventSeatFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventSeatFilled'

      short_name='EventSeat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 17h8v-6h-8Zm-9 3V4h20v16Z"/>
    </Icon>
  );
});

IconMaterialEventSeatFilled.displayName = 'AmauiIconMaterialEventSeatFilled';

export default IconMaterialEventSeatFilled;
