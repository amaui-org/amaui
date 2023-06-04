import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveSelectionLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveSelectionLeftW100Filled'

      short_name='MoveSelectionLeft'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M136 760V392h368v368H136Zm500-340v-28h28v28h-28Zm0 340v-28h28v28h-28Zm160-340v-28h28v28h-28Zm0 170v-28h28v28h-28Zm0 170v-28h28v28h-28Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionLeftW100Filled.displayName = 'AmauiIconMaterialMoveSelectionLeftW100Filled';

export default IconMaterialMoveSelectionLeftW100Filled;
