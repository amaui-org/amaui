import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnfloatLandscapeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfloatLandscapeW100'

      short_name='UnfloatLandscape'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 844V308h696v216h-28V336H160v480h428v28H132Zm322-194 20-20-187-186h141v-28H240v188h28V464l186 186Zm234 194V624h140v220H688ZM480 576Z"/>
    </Icon>
  );
});

IconMaterialUnfloatLandscapeW100.displayName = 'AmauiIconMaterialUnfloatLandscapeW100';

export default IconMaterialUnfloatLandscapeW100;
