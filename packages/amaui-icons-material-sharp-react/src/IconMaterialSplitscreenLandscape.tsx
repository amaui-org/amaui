import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenLandscape = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenLandscape'

      short_name='SplitscreenLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-320h200v-320H520v320Zm-280 0h200v-320H240v320ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0-480v480-480Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenLandscape.displayName = 'AmauiIconMaterialSplitscreenLandscape';

export default IconMaterialSplitscreenLandscape;
