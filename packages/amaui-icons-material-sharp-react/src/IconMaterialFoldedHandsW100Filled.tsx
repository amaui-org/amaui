import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFoldedHandsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoldedHandsW100Filled'

      short_name='FoldedHands'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M609-346v-110l-43-80q-25 1-42 19t-17 43v204l83 138h237l-39-433-248-297q-31 31-45 71t6 76l136 251v118h-28Zm-287 0v-118l136-251q20-36 5.5-76T419-862L171-565l-39 433h237l83-138v-204q0-25-17-42.5T393-535l-43 79v110h-28Z"/>
    </Icon>
  );
});

IconMaterialFoldedHandsW100Filled.displayName = 'AmauiIconMaterialFoldedHandsW100Filled';

export default IconMaterialFoldedHandsW100Filled;
