import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFloatLandscapeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloatLandscapeW100'

      short_name='FloatLandscape'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 844V308h696v216h-28V336H160v480h428v28H132Zm556 0V624h140v220H688ZM480 576Z"/>
    </Icon>
  );
});

IconMaterialFloatLandscapeW100.displayName = 'AmauiIconMaterialFloatLandscapeW100';

export default IconMaterialFloatLandscapeW100;
