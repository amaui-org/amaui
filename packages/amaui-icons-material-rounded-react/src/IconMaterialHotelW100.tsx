import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHotelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelW100'

      short_name='Hotel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.65 18.7q-.15 0-.25-.1t-.1-.25V6.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V15h8.65V9q0-.275.213-.488.212-.212.487-.212H19q1.125 0 1.913.787.787.788.787 1.913v7.35q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V15.7H3v2.65q0 .15-.1.25t-.25.1ZM7 12.85q-.775 0-1.312-.538Q5.15 11.775 5.15 11t.538-1.312Q6.225 9.15 7 9.15t1.312.538q.538.537.538 1.312t-.538 1.312q-.537.538-1.312.538ZM12.35 15H21v-4q0-.825-.587-1.413Q19.825 9 19 9h-6.65ZM7 12.15q.475 0 .812-.338.338-.337.338-.812 0-.475-.338-.812Q7.475 9.85 7 9.85q-.475 0-.812.338-.338.337-.338.812 0 .475.338.812.337.338.812.338ZM7 11Zm5.35-2v6Z"/>
    </Icon>
  );
});

IconMaterialHotelW100.displayName = 'AmauiIconMaterialHotelW100';

export default IconMaterialHotelW100;
