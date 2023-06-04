import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardOnscreenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardOnscreenW100'

      short_name='KeyboardOnscreen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M332 764h296v-56H332v56ZM212 644h56v-56h-56v56Zm120 0h56v-56h-56v56Zm120 0h56v-56h-56v56Zm120 0h56v-56h-56v56Zm120 0h56v-56h-56v56ZM132 844V308h696v536H132Zm28-362h640V336H160v146Zm0 334h640V510H160v306Zm0 0V510v306Z"/>
    </Icon>
  );
});

IconMaterialKeyboardOnscreenW100.displayName = 'AmauiIconMaterialKeyboardOnscreenW100';

export default IconMaterialKeyboardOnscreenW100;
