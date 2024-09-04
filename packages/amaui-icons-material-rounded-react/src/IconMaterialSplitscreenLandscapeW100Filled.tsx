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
      <path d="M560-340h110q12.75 0 21.38-8.63Q700-357.25 700-370v-220q0-12.75-8.62-21.38Q682.75-620 670-620H560q-12.75 0-21.37 8.62Q530-602.75 530-590v220q0 12.75 8.63 21.37Q547.25-340 560-340Zm-270 0h110q12.75 0 21.38-8.63Q430-357.25 430-370v-220q0-12.75-8.62-21.38Q412.75-620 400-620H290q-12.75 0-21.37 8.62Q260-602.75 260-590v220q0 12.75 8.63 21.37Q277.25-340 290-340Zm-98 128q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenLandscapeW100Filled.displayName = 'AmauiIconMaterialSplitscreenLandscapeW100Filled';

export default IconMaterialSplitscreenLandscapeW100Filled;
