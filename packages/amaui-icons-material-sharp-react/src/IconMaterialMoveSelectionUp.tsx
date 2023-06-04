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
      <path d="M240 656V176h480v480H240Zm80-80h320V256H320v320Zm320 240v-80h80v80h-80Zm-400 0v-80h80v80h-80Zm400 160v-80h80v80h-80Zm-200 0v-80h80v80h-80Zm-200 0v-80h80v80h-80Zm240-560Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionUp.displayName = 'AmauiIconMaterialMoveSelectionUp';

export default IconMaterialMoveSelectionUp;
