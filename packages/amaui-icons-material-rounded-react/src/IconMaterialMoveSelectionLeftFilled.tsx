import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveSelectionLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveSelectionLeftFilled'

      short_name='MoveSelectionLeft'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M560 736q0 33-23.5 56.5T480 816H160q-33 0-56.5-23.5T80 736V416q0-33 23.5-56.5T160 336h320q33 0 56.5 23.5T560 416v320Zm80-320v-80h80v80h-80Zm0 400v-80h80v80h-80Zm160-200v-80h80v80h-80Zm0-200v-80q33 0 56.5 23.5T880 416h-80Zm0 320h80q0 33-23.5 56.5T800 816v-80Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionLeftFilled.displayName = 'AmauiIconMaterialMoveSelectionLeftFilled';

export default IconMaterialMoveSelectionLeftFilled;
