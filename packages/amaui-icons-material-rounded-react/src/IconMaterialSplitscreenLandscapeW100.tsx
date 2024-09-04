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
      <path d="M560-340h110q13 0 21.5-8.5T700-370v-220q0-13-8.5-21.5T670-620H560q-13 0-21.5 8.5T530-590v220q0 13 8.5 21.5T560-340Zm-270 0h110q13 0 21.5-8.5T430-370v-220q0-13-8.5-21.5T400-620H290q-13 0-21.5 8.5T260-590v220q0 13 8.5 21.5T290-340Zm-98 128q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32-480v480-480Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenLandscapeW100.displayName = 'AmauiIconMaterialSplitscreenLandscapeW100';

export default IconMaterialSplitscreenLandscapeW100;
