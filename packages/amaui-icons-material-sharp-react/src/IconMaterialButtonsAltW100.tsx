import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialButtonsAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ButtonsAltW100'

      short_name='ButtonsAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-292q-26 0-43-17t-17-43v-256q0-26 17-43t43-17h576q26 0 43 17t17 43v256q0 26-17 43t-43 17H192Zm0-28h576q14 0 23-9t9-23v-256q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v256q0 14 9 23t23 9Zm114-66h28v-80h80v-28h-80v-80h-28v80h-80v28h80v80Zm-146 66v-320 320Z"/>
    </Icon>
  );
});

IconMaterialButtonsAltW100.displayName = 'AmauiIconMaterialButtonsAltW100';

export default IconMaterialButtonsAltW100;
