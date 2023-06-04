import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveSelectionDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveSelectionDownW100Filled'

      short_name='MoveSelectionDown'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M296 920V552h368v368H296Zm0-500v-28h28v28h-28Zm340 0v-28h28v28h-28ZM296 260v-28h28v28h-28Zm170 0v-28h28v28h-28Zm170 0v-28h28v28h-28Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionDownW100Filled.displayName = 'AmauiIconMaterialMoveSelectionDownW100Filled';

export default IconMaterialMoveSelectionDownW100Filled;
