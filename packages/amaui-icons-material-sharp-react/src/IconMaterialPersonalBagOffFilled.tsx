import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonalBagOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonalBagOffFilled'

      short_name='PersonalBagOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-880q51 0 85.5 37.5T600-754v22q71 33 115.5 100T760-480v166L348-726q3-2 6-3t6-3v-28q0-50 35-85t85-35Zm0 80q-17 0-28.5 11.5T440-760v4q11-2 20-3t20-1q11 0 20 1t20 3v-4q0-17-11.5-28.5T480-800ZM792-56 647-200h113v120H200v-400q0-36 8.5-69.5T234-612L56-792l56-56 736 736-56 56ZM366-480h-46v80h126l-80-80Z"/>
    </Icon>
  );
});

IconMaterialPersonalBagOffFilled.displayName = 'AmauiIconMaterialPersonalBagOffFilled';

export default IconMaterialPersonalBagOffFilled;
