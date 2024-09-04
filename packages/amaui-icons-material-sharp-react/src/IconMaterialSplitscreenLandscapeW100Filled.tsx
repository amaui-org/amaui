import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenLandscapeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenLandscapeW100Filled'

      short_name='SplitscreenLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M530-340h170v-280H530v280Zm-270 0h170v-280H260v280ZM132-212v-536h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenLandscapeW100Filled.displayName = 'AmauiIconMaterialSplitscreenLandscapeW100Filled';

export default IconMaterialSplitscreenLandscapeW100Filled;
