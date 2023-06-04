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
      <path d="M296 600V232h368v368H296Zm28-28h312V260H324v312Zm312 188v-28h28v28h-28Zm-340 0v-28h28v28h-28Zm340 160v-28h28v28h-28Zm-170 0v-28h28v28h-28Zm-170 0v-28h28v28h-28Zm184-504Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionUpW100.displayName = 'AmauiIconMaterialMoveSelectionUpW100';

export default IconMaterialMoveSelectionUpW100;
