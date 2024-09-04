import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopPortraitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopPortraitW100Filled'

      short_name='DesktopPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M448-260h172v-332H448v332ZM340-360h28v-312h140v-28H340v340Zm408 228H212v-696h536v696Z"/>
    </Icon>
  );
});

IconMaterialDesktopPortraitW100Filled.displayName = 'AmauiIconMaterialDesktopPortraitW100Filled';

export default IconMaterialDesktopPortraitW100Filled;
