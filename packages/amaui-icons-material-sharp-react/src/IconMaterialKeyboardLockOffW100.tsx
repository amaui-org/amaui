import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardLockOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardLockOffW100'

      short_name='KeyboardLockOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M349-480Zm177 148H332v-56h216q-8 12-13.5 26.5T526-332ZM212-452v-56h56v56h-56Zm120 0v-56h56v56h-56ZM212-572v-56h56v56h-56Zm360 0h56v-56h-56v56Zm120 0h56v-56h-56v56Zm0 87q14-2 28-2.5t28 1.5v-22h-56v23Zm-64 33v-56h-56v19l37 37h19ZM508-572v-56h-56v19l37 37h19ZM813-94 97-810l20-20 716 716-20 20ZM495-567Zm333 110q-7-5-13.5-8t-14.5-6v-209H381l-28-28h475v251ZM132-252v-456h107l28 28H160v400h361v28H132Zm481 120v-175h27l149 149v26H613Zm215-101-67-67v-48q0-17-11.5-28.5T720.6-388q-9.2 0-17.9 4T689-372l-20-20q9.43-11.08 22.71-17.54Q705-416 721-416q29 0 48.5 19.5T789-348v40h39v75Z"/>
    </Icon>
  );
});

IconMaterialKeyboardLockOffW100.displayName = 'AmauiIconMaterialKeyboardLockOffW100';

export default IconMaterialKeyboardLockOffW100;
