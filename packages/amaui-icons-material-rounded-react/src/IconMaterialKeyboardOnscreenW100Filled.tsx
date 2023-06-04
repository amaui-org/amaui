import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardOnscreenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardOnscreenW100Filled'

      short_name='KeyboardOnscreen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M360 764h240q11 0 19.5-8t8.5-20q0-11-8.5-19.5T600 708H360q-11 0-19.5 8t-8.5 20q0 11 8.5 19.5T360 764ZM212 644h56v-56h-56v56Zm120 0h56v-56h-56v56Zm120 0h56v-56h-56v56Zm120 0h56v-56h-56v56Zm120 0h56v-56h-56v56ZM192 844q-26 0-43-17t-17-43V368q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm-32-362h640V368q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v114Z"/>
    </Icon>
  );
});

IconMaterialKeyboardOnscreenW100Filled.displayName = 'AmauiIconMaterialKeyboardOnscreenW100Filled';

export default IconMaterialKeyboardOnscreenW100Filled;
