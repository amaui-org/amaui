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
      <path d="M456 760V392h368v368H456Zm28-28h312V420H484v312Zm-188 28v-28h28v28h-28Zm0-340v-28h28v28h-28ZM136 760v-28h28v28h-28Zm0-170v-28h28v28h-28Zm0-170v-28h28v28h-28Zm504 156Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionRightW100.displayName = 'AmauiIconMaterialMoveSelectionRightW100';

export default IconMaterialMoveSelectionRightW100;
