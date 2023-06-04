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
      <path d="M2.3 18.7V6.3H3V15h8.65V8.3H21.7v10.4H21v-3H3v3ZM7 12.85q-.775 0-1.312-.538Q5.15 11.775 5.15 11t.538-1.312Q6.225 9.15 7 9.15t1.312.538q.538.537.538 1.312t-.538 1.312q-.537.538-1.312.538Z"/>
    </Icon>
  );
});

IconMaterialHotelW100Filled.displayName = 'AmauiIconMaterialHotelW100Filled';

export default IconMaterialHotelW100Filled;
