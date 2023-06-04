import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnfloatLandscapeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfloatLandscapeW100Filled'

      short_name='UnfloatLandscape'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 844V308h696v216H588v320H132Zm108-428v188h28V464l186 186 20-20-187-186h141v-28H240Zm448 428V624h140v220H688Z"/>
    </Icon>
  );
});

IconMaterialUnfloatLandscapeW100Filled.displayName = 'AmauiIconMaterialUnfloatLandscapeW100Filled';

export default IconMaterialUnfloatLandscapeW100Filled;
