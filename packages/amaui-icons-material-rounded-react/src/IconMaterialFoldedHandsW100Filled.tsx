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
      <path d="M609-346v-110l-43-80q-25 1-42 19t-17 43v187q0 8 2 16t7 15l74 124h237l-37-414q-1-9-4.5-17.5T776-579L562-836q-9-11-22.5-11T518-836q-20 27-26.5 59.5T501-715l136 251v118h-28Zm-287 0v-118l136-251q16-29 9.5-61.5T441-836q-9-11-22-11t-22 11L183-579q-6 7-9.5 15.5T169-546l-37 414h237l74-124q5-7 7-15t2-16v-187q0-25-17-42.5T393-535l-43 79v110h-28Z"/>
    </Icon>
  );
});

IconMaterialFoldedHandsW100Filled.displayName = 'AmauiIconMaterialFoldedHandsW100Filled';

export default IconMaterialFoldedHandsW100Filled;
