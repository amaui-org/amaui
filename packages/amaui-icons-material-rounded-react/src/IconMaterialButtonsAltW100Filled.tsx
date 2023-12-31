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
      <path d="M192-292q-26 0-43-17t-17-43.332v-255.336Q132-634 149-651t43-17h576q26 0 43 17t17 43.332v255.336Q828-326 811-309t-43 17H192Zm114-174v66q0 6.067 3.953 10.033 3.954 3.967 10 3.967Q326-386 330-389.967q4-3.966 4-10.033v-66h66q6.067 0 10.033-3.953 3.967-3.954 3.967-10Q414-486 410.033-490q-3.966-4-10.033-4h-66v-66q0-6.067-3.953-10.033-3.954-3.967-10-3.967Q314-574 310-570.033q-4 3.966-4 10.033v66h-66q-6.067 0-10.033 3.953-3.967 3.954-3.967 10Q226-474 229.967-470q3.966 4 10.033 4h66Z"/>
    </Icon>
  );
});

IconMaterialButtonsAltW100Filled.displayName = 'AmauiIconMaterialButtonsAltW100Filled';

export default IconMaterialButtonsAltW100Filled;
