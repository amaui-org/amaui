import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenLandscapeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenLandscapeW100'

      short_name='SplitscreenLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M530-340h170v-280H530v280Zm-270 0h170v-280H260v280ZM132-212v-536h696v536H132Zm28-28h640v-480H160v480Zm0-480v480-480Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenLandscapeW100.displayName = 'AmauiIconMaterialSplitscreenLandscapeW100';

export default IconMaterialSplitscreenLandscapeW100;
