import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveSelectionUp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveSelectionUp'

      short_name='MoveSelectionUp'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 656q-33 0-56.5-23.5T240 576V256q0-33 23.5-56.5T320 176h320q33 0 56.5 23.5T720 256v320q0 33-23.5 56.5T640 656H320Zm0-80h320V256H320v320Zm320 240v-80h80v80h-80Zm-400 0v-80h80v80h-80Zm200 160v-80h80v80h-80Zm40-560Zm160 560v-80h80q0 33-23.5 56.5T640 976Zm-320 0q-33 0-56.5-23.5T240 896h80v80Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionUp.displayName = 'AmauiIconMaterialMoveSelectionUp';

export default IconMaterialMoveSelectionUp;
