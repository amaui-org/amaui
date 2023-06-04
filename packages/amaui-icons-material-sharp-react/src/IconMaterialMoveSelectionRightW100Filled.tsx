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
      <path d="M456 760V392h368v368H456Zm-160 0v-28h28v28h-28Zm0-340v-28h28v28h-28ZM136 760v-28h28v28h-28Zm0-170v-28h28v28h-28Zm0-170v-28h28v28h-28Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionRightW100Filled.displayName = 'AmauiIconMaterialMoveSelectionRightW100Filled';

export default IconMaterialMoveSelectionRightW100Filled;
