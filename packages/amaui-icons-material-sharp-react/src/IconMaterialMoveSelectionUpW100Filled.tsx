import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveSelectionUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveSelectionUpW100Filled'

      short_name='MoveSelectionUp'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M296 600V232h368v368H296Zm340 160v-28h28v28h-28Zm-340 0v-28h28v28h-28Zm340 160v-28h28v28h-28Zm-170 0v-28h28v28h-28Zm-170 0v-28h28v28h-28Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionUpW100Filled.displayName = 'AmauiIconMaterialMoveSelectionUpW100Filled';

export default IconMaterialMoveSelectionUpW100Filled;
