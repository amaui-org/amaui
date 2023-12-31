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
      <path d="M192-292q-26 0-43-17t-17-43v-256q0-26 17-43t43-17h576q26 0 43 17t17 43v256q0 26-17 43t-43 17H192Zm0-28h576q14 0 23-9t9-23v-256q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v256q0 14 9 23t23 9Zm114-146v66q0 6 4 10t10 4q6 0 10-4t4-10v-66h66q6 0 10-4t4-10q0-6-4-10t-10-4h-66v-66q0-6-4-10t-10-4q-6 0-10 4t-4 10v66h-66q-6 0-10 4t-4 10q0 6 4 10t10 4h66ZM160-320v-320 320Z"/>
    </Icon>
  );
});

IconMaterialButtonsAltW100.displayName = 'AmauiIconMaterialButtonsAltW100';

export default IconMaterialButtonsAltW100;
