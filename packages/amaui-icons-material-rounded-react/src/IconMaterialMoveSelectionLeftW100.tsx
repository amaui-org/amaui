import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveSelectionLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveSelectionLeftW100'

      short_name='MoveSelectionLeft'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M504 699.523Q504 725 486.5 742.5 469 760 443.523 760H196.477Q171 760 153.5 742.5 136 725 136 699.523V452.477Q136 427 153.5 409.5 171 392 196.477 392h247.046Q469 392 486.5 409.5 504 427 504 452.477v247.046ZM476 700V452q0-14-9-23t-23-9H196q-14 0-23 9t-9 23v248q0 14 9 23t23 9h248q14 0 23-9t9-23Zm160-280v-28h28v28h-28Zm0 340v-28h28v28h-28Zm160-170v-28h28v28h-28Zm-476-14Zm476-156v-28q11.55 0 19.775 8.225Q824 408.45 824 420h-28Zm0 312h28q0 11.55-8.225 19.775Q807.55 760 796 760v-28Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionLeftW100.displayName = 'AmauiIconMaterialMoveSelectionLeftW100';

export default IconMaterialMoveSelectionLeftW100;
