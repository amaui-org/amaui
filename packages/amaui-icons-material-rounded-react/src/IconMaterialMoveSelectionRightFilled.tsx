import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveSelectionRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveSelectionRightFilled'

      short_name='MoveSelectionRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M400 416q0-33 23.5-56.5T480 336h320q33 0 56.5 23.5T880 416v320q0 33-23.5 56.5T800 816H480q-33 0-56.5-23.5T400 736V416ZM240 816v-80h80v80h-80Zm0-400v-80h80v80h-80ZM80 616v-80h80v80H80Zm0 120h80v80q-33 0-56.5-23.5T80 736Zm0-320q0-33 23.5-56.5T160 336v80H80Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionRightFilled.displayName = 'AmauiIconMaterialMoveSelectionRightFilled';

export default IconMaterialMoveSelectionRightFilled;
