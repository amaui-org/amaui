import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEvStationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvStationFilled'

      short_name='EvStation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.5 19 2.5-4H9.5v-3L7 16h1.5ZM6 10h6V5H6ZM4 21V3h10v9h3v7.5h2.25V9H18V6h.5V4.5h1V6h1V4.5h1V6h.5v3h-1.25v12H15.5v-7.5H14V21Z"/>
    </Icon>
  );
});

IconMaterialEvStationFilled.displayName = 'AmauiIconMaterialEvStationFilled';

export default IconMaterialEvStationFilled;
