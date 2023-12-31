import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonalBagOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonalBagOff'

      short_name='PersonalBagOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-880q51 0 85.5 37.5T600-754v22q71 33 115.5 100T760-480v166l-80-80v-86q0-83-58.5-141.5T480-680q-20 0-37.5 4T408-666l-60-60q3-2 6-3t6-3v-28q0-50 35-85t85-35Zm0 80q-17 0-28.5 11.5T440-760v4q11-2 20-3t20-1q11 0 20 1t20 3v-4q0-17-11.5-28.5T480-800ZM764-84 446-400h-86q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480h6l-72-72q-6 17-10 34.5t-4 37.5v320h400v-120l80 80v40q0 33-23.5 56.5T680-80H280q-33 0-56.5-23.5T200-160v-320q0-36 8.5-69.5T234-612L84-764q-11-11-11.5-27.5T84-820q11-11 28-11t28 11l680 680q11 11 11.5 27.5T820-84q-11 11-28 11t-28-11ZM544-537Zm-98 137Zm34 44Z"/>
    </Icon>
  );
});

IconMaterialPersonalBagOff.displayName = 'AmauiIconMaterialPersonalBagOff';

export default IconMaterialPersonalBagOff;
