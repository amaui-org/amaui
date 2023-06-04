import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveSelectionUpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveSelectionUpFilled'

      short_name='MoveSelectionUp'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M240 656V176h480v480H240Zm400 160v-80h80v80h-80Zm-400 0v-80h80v80h-80Zm400 160v-80h80v80h-80Zm-200 0v-80h80v80h-80Zm-200 0v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionUpFilled.displayName = 'AmauiIconMaterialMoveSelectionUpFilled';

export default IconMaterialMoveSelectionUpFilled;
