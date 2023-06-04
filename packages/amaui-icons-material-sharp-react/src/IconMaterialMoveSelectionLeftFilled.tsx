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
      <path d="M80 816V336h480v480H80Zm560-400v-80h80v80h-80Zm0 400v-80h80v80h-80Zm160-400v-80h80v80h-80Zm0 200v-80h80v80h-80Zm0 200v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionLeftFilled.displayName = 'AmauiIconMaterialMoveSelectionLeftFilled';

export default IconMaterialMoveSelectionLeftFilled;
