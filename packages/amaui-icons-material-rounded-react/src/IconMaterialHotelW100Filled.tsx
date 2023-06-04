import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHotelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelW100Filled'

      short_name='Hotel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.65 18.7q-.15 0-.25-.1t-.1-.25V6.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V15h8.65V9q0-.275.213-.488.212-.212.487-.212H19q1.125 0 1.913.787.787.788.787 1.913v7.35q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V15.7H3v2.65q0 .15-.1.25t-.25.1ZM7 12.85q-.775 0-1.312-.538Q5.15 11.775 5.15 11t.538-1.312Q6.225 9.15 7 9.15t1.312.538q.538.537.538 1.312t-.538 1.312q-.537.538-1.312.538Z"/>
    </Icon>
  );
});

IconMaterialHotelW100Filled.displayName = 'AmauiIconMaterialHotelW100Filled';

export default IconMaterialHotelW100Filled;
