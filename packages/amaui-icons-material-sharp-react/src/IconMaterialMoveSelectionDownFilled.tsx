import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveSelectionDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveSelectionDownFilled'

      short_name='MoveSelectionDown'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M240 976V496h480v480H240Zm0-560v-80h80v80h-80Zm400 0v-80h80v80h-80ZM240 256v-80h80v80h-80Zm200 0v-80h80v80h-80Zm200 0v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionDownFilled.displayName = 'AmauiIconMaterialMoveSelectionDownFilled';

export default IconMaterialMoveSelectionDownFilled;
