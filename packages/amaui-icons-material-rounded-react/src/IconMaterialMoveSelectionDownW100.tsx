import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveSelectionDownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveSelectionDownW100'

      short_name='MoveSelectionDown'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M356.477 920Q331 920 313.5 902.5 296 885 296 859.523V612.477Q296 587 313.5 569.5 331 552 356.477 552h247.046Q629 552 646.5 569.5 664 587 664 612.477v247.046Q664 885 646.5 902.5 629 920 603.523 920H356.477ZM604 580H356q-14 0-23 9t-9 23v248q0 14 9 23t23 9h248q14 0 23-9t9-23V612q0-14-9-23t-23-9ZM296 420v-28h28v28h-28Zm340 0v-28h28v28h-28ZM466 260v-28h28v28h-28Zm14 476ZM296 260q0-11.55 8.225-19.775Q312.45 232 324 232v28h-28Zm340 0v-28q11.55 0 19.775 8.225Q664 248.45 664 260h-28Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionDownW100.displayName = 'AmauiIconMaterialMoveSelectionDownW100';

export default IconMaterialMoveSelectionDownW100;
