import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGarageDoorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageDoorFilled'

      short_name='GarageDoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-400v-80h320v80H320Zm0 120v-80h320v80H320Zm0 120v-80h320v80H320Zm160-680 400 360H760v320h-80v-360H280v360h-80v-320H80l400-360Z"/>
    </Icon>
  );
});

IconMaterialGarageDoorFilled.displayName = 'AmauiIconMaterialGarageDoorFilled';

export default IconMaterialGarageDoorFilled;
