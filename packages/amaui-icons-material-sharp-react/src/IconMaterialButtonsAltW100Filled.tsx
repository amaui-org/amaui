import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialButtonsAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ButtonsAltW100Filled'

      short_name='ButtonsAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-292q-26 0-43-17t-17-43.332v-255.336Q132-634 149-651t43-17h576q26 0 43 17t17 43.332v255.336Q828-326 811-309t-43 17H192Zm114-94h28v-80h80v-28h-80v-80h-28v80h-80v28h80v80Z"/>
    </Icon>
  );
});

IconMaterialButtonsAltW100Filled.displayName = 'AmauiIconMaterialButtonsAltW100Filled';

export default IconMaterialButtonsAltW100Filled;
