import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFloatLandscapeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloatLandscapeW100Filled'

      short_name='FloatLandscape'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 844V308h696v216H588v320H132Zm556 0V624h140v220H688Z"/>
    </Icon>
  );
});

IconMaterialFloatLandscapeW100Filled.displayName = 'AmauiIconMaterialFloatLandscapeW100Filled';

export default IconMaterialFloatLandscapeW100Filled;
