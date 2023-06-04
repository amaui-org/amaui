import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVapingRoomsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VapingRoomsW100Filled'

      short_name='VapingRooms'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.8 18.5q-.8-.2-1.5-.288-.7-.087-1.5-.087H4v-1.25h.8q.8 0 1.5-.087.7-.088 1.5-.288Zm1 0v-2h11.7v2Zm1.7-.5q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15Zm7.6-3v-1.3q0-.875-.575-1.463-.575-.587-1.375-.587H14.6q-1.05 0-1.8-.775T12.05 9q0-1.025.75-1.738.75-.712 1.8-.712v.7q-.75 0-1.3.5T12.75 9q0 .75.55 1.35.55.6 1.3.6h1.55q1.1 0 1.875.812.775.813.775 1.938V15Zm1.7 0v-2.25q0-1.65-1.15-2.65t-2.85-1v-.7q.75 0 1.275-.525.525-.525.525-1.275 0-.8-.525-1.35T15.8 4.7V4q1.05 0 1.775.775.725.775.725 1.825 0 .725-.3 1.225-.3.5-.75.775 1.275.35 2.263 1.4.987 1.05.987 2.75V15Z"/>
    </Icon>
  );
});

IconMaterialVapingRoomsW100Filled.displayName = 'AmauiIconMaterialVapingRoomsW100Filled';

export default IconMaterialVapingRoomsW100Filled;
