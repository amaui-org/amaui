import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenAddFilled'

      short_name='SplitscreenAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-120h-40q-17 0-28.5-11.5T680-160q0-17 11.5-28.5T720-200h40v-40q0-17 11.5-28.5T800-280q17 0 28.5 11.5T840-240v40h40q17 0 28.5 11.5T920-160q0 17-11.5 28.5T880-120h-40v40q0 17-11.5 28.5T800-40q-17 0-28.5-11.5T760-80v-40ZM200-520q-33 0-56.5-23.5T120-600v-160q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v160q0 33-23.5 56.5T760-520H200Zm0 400q-33 0-56.5-23.5T120-200v-160q0-33 23.5-56.5T200-440h560q33 0 56.5 23.5T840-360v4q-9-2-20-3t-20-1q-84 0-142 58.5T600-160q0 11 1 21t3 19H200Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenAddFilled.displayName = 'AmauiIconMaterialSplitscreenAddFilled';

export default IconMaterialSplitscreenAddFilled;
