import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenVerticalAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenVerticalAddFilled'

      short_name='SplitscreenVerticalAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-120h-40q-17 0-28.5-11.5T680-160q0-17 11.5-28.5T720-200h40v-40q0-17 11.5-28.5T800-280q17 0 28.5 11.5T840-240v40h40q17 0 28.5 11.5T920-160q0 17-11.5 28.5T880-120h-40v40q0 17-11.5 28.5T800-40q-17 0-28.5-11.5T760-80v-40Zm-560 0q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h160q33 0 56.5 23.5T440-760v560q0 33-23.5 56.5T360-120H200Zm404 0q-35 0-59.5-23T520-200v-560q0-33 23.5-56.5T600-840h160q33 0 56.5 23.5T840-760v404q-10-2-20-3t-20-1q-84 0-142.5 59.5T600-157q0 10 1 19t3 18Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenVerticalAddFilled.displayName = 'AmauiIconMaterialSplitscreenVerticalAddFilled';

export default IconMaterialSplitscreenVerticalAddFilled;
