import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveSelectionRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveSelectionRightW100'

      short_name='MoveSelectionRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M456 452.477Q456 427 473.5 409.5 491 392 516.477 392h247.046Q789 392 806.5 409.5 824 427 824 452.477v247.046Q824 725 806.5 742.5 789 760 763.523 760H516.477Q491 760 473.5 742.5 456 725 456 699.523V452.477Zm28-.477v248q0 14 9 23t23 9h248q14 0 23-9t9-23V452q0-14-9-23t-23-9H516q-14 0-23 9t-9 23ZM296 760v-28h28v28h-28Zm0-340v-28h28v28h-28ZM136 590v-28h28v28h-28Zm504-14ZM136 732h28v28q-12 0-20-8.225T136 732Zm0-312q0-11.55 8.225-19.775Q152.45 392 164 392v28h-28Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionRightW100.displayName = 'AmauiIconMaterialMoveSelectionRightW100';

export default IconMaterialMoveSelectionRightW100;
