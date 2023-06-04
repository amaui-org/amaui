import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmokingRoomsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmokingRoomsW100'

      short_name='SmokingRooms'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.1 17.9v-1.4h.7v1.4Zm-14.6 0v-1.4h13.6v1.4ZM18.1 15v-1.3q0-.875-.575-1.463-.575-.587-1.375-.587H14.6q-1.05 0-1.8-.775T12.05 9q0-1.025.75-1.738.75-.712 1.8-.712v.7q-.75 0-1.3.5T12.75 9q0 .75.55 1.35.55.6 1.3.6h1.55q1.1 0 1.875.812.775.813.775 1.938V15Zm1.7 2.9v-1.4h.7v1.4Zm0-2.9v-2.25q0-1.65-1.15-2.65t-2.85-1v-.7q.75 0 1.275-.525.525-.525.525-1.275 0-.8-.525-1.35T15.8 4.7V4q1.05 0 1.775.775.725.775.725 1.825 0 .725-.3 1.225-.3.5-.75.775 1.275.35 2.263 1.4.987 1.05.987 2.75V15Z"/>
    </Icon>
  );
});

IconMaterialSmokingRoomsW100.displayName = 'AmauiIconMaterialSmokingRoomsW100';

export default IconMaterialSmokingRoomsW100;
