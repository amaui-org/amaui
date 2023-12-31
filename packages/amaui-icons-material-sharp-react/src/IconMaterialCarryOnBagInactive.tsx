import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarryOnBagInactive = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarryOnBagInactive'

      short_name='CarryOnBagInactive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m600-474-80-80v-46h-46l-80-80h126v-120h-80v-80h160v406ZM792-56l-76-76q-11 42-42.5 67T600-40q-39 0-69.5-22.5T488-120H200v-480q0-11 2.5-20t7.5-18L56-792l56-56 736 736-56 56ZM320-200v-326l-40-40v366h40Zm280 100q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM400-200h88q5-14 13-26.5t19-21.5v-78L400-446v246Zm198 42ZM474-600ZM360-323Zm-40 123v-326 326Zm80 0v-246 246Zm200 40Z"/>
    </Icon>
  );
});

IconMaterialCarryOnBagInactive.displayName = 'AmauiIconMaterialCarryOnBagInactive';

export default IconMaterialCarryOnBagInactive;
