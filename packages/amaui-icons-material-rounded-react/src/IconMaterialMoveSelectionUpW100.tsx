import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveSelectionUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveSelectionUpW100'

      short_name='MoveSelectionUp'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M356.477 600Q331 600 313.5 582.5 296 565 296 539.523V292.477Q296 267 313.5 249.5 331 232 356.477 232h247.046Q629 232 646.5 249.5 664 267 664 292.477v247.046Q664 565 646.5 582.5 629 600 603.523 600H356.477ZM356 572h248q14 0 23-9t9-23V292q0-14-9-23t-23-9H356q-14 0-23 9t-9 23v248q0 14 9 23t23 9Zm280 188v-28h28v28h-28Zm-340 0v-28h28v28h-28Zm170 160v-28h28v28h-28Zm14-504Zm156 504v-28h28q0 12-8.225 20T636 920Zm-312 0q-11.55 0-19.775-8.225Q296 903.55 296 892h28v28Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionUpW100.displayName = 'AmauiIconMaterialMoveSelectionUpW100';

export default IconMaterialMoveSelectionUpW100;
