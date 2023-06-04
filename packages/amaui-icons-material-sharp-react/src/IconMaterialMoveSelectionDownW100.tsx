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
      <path d="M296 920V552h368v368H296Zm28-28h312V580H324v312Zm-28-472v-28h28v28h-28Zm340 0v-28h28v28h-28ZM296 260v-28h28v28h-28Zm170 0v-28h28v28h-28Zm170 0v-28h28v28h-28ZM480 736Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionDownW100.displayName = 'AmauiIconMaterialMoveSelectionDownW100';

export default IconMaterialMoveSelectionDownW100;
