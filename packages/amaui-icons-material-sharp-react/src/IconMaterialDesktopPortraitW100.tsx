import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopPortraitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopPortraitW100'

      short_name='DesktopPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M448-260h172v-332H448v332ZM340-360h28v-312h140v-28H340v340Zm408 228H212v-696h536v696Zm-28-28v-640H240v640h480Zm0-640H240h480Z"/>
    </Icon>
  );
});

IconMaterialDesktopPortraitW100.displayName = 'AmauiIconMaterialDesktopPortraitW100';

export default IconMaterialDesktopPortraitW100;
