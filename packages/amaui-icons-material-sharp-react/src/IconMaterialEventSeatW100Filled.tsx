import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEventSeatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventSeatW100Filled'

      short_name='EventSeat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.4 16.95H19v-5.6h-7.6ZM3.3 18.7V5.3h17.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialEventSeatW100Filled.displayName = 'AmauiIconMaterialEventSeatW100Filled';

export default IconMaterialEventSeatW100Filled;
