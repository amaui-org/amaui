import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenLandscapeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenLandscapeFilled'

      short_name='SplitscreenLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-320h200v-320H520v320Zm-280 0h200v-320H240v320ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenLandscapeFilled.displayName = 'AmauiIconMaterialSplitscreenLandscapeFilled';

export default IconMaterialSplitscreenLandscapeFilled;
