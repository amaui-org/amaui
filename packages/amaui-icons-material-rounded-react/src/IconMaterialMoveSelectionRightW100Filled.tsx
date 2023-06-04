import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveSelectionRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveSelectionRightW100Filled'

      short_name='MoveSelectionRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M456 452.477Q456 427 473.5 409.5 491 392 516.477 392h247.046Q789 392 806.5 409.5 824 427 824 452.477v247.046Q824 725 806.5 742.5 789 760 763.523 760H516.477Q491 760 473.5 742.5 456 725 456 699.523V452.477ZM296 760v-28h28v28h-28Zm0-340v-28h28v28h-28ZM136 590v-28h28v28h-28Zm0 142h28v28q-12 0-20-8.225T136 732Zm0-312q0-11.55 8.225-19.775Q152.45 392 164 392v28h-28Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionRightW100Filled.displayName = 'AmauiIconMaterialMoveSelectionRightW100Filled';

export default IconMaterialMoveSelectionRightW100Filled;
