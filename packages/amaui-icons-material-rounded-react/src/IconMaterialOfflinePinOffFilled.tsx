import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOfflinePinOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflinePinOffFilled'

      short_name='OfflinePinOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-59 17-115t49-105l-63-63q-12-12-11.5-28.5T84-820q12-12 28.5-12t28.5 12l679 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84l-63-62q-49 32-105 49T480-80ZM360-280h206l-80-80H360q-17 0-28.5 11.5T320-320q0 17 11.5 28.5T360-280Zm120-600q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 42-8.5 82.5T846-319q-6 14-17.5 20.5T803-292q-10 0-19-3.5T767-307L570-504q-6-6-6-14t6-14l66-66q12-12 11.5-28.5T635-654q-12-11-28.5-10.5T579-653l-65 65q-6 6-14 6t-14-6L307-767q-8-8-11.5-17t-3.5-19q0-14 6.5-25.5T319-846q38-17 78.5-25.5T480-880Z"/>
    </Icon>
  );
});

IconMaterialOfflinePinOffFilled.displayName = 'AmauiIconMaterialOfflinePinOffFilled';

export default IconMaterialOfflinePinOffFilled;
