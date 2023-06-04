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
      <path d="M504 699.523Q504 725 486.5 742.5 469 760 443.523 760H196.477Q171 760 153.5 742.5 136 725 136 699.523V452.477Q136 427 153.5 409.5 171 392 196.477 392h247.046Q469 392 486.5 409.5 504 427 504 452.477v247.046ZM636 420v-28h28v28h-28Zm0 340v-28h28v28h-28Zm160-170v-28h28v28h-28Zm0-170v-28q11.55 0 19.775 8.225Q824 408.45 824 420h-28Zm0 312h28q0 11.55-8.225 19.775Q807.55 760 796 760v-28Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionLeftW100Filled.displayName = 'AmauiIconMaterialMoveSelectionLeftW100Filled';

export default IconMaterialMoveSelectionLeftW100Filled;
