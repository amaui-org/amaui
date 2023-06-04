import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEventSeatW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventSeatW100'

      short_name='EventSeat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.4 16.95H19v-5.6h-7.6ZM3.3 18.7V5.3h17.4v13.4ZM4 18h16V6H4Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialEventSeatW100.displayName = 'AmauiIconMaterialEventSeatW100';

export default IconMaterialEventSeatW100;
