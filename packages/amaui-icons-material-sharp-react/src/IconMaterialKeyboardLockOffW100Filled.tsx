import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardLockOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardLockOffW100Filled'

      short_name='KeyboardLockOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M613-132v-175h27l149 149v26H613Zm215-101-67-67v-48q0-17-11.5-28.5T720.6-388q-9.2 0-17.9 4T689-372l-20-20q9.43-11.08 22.71-17.54Q705-416 721-416q29 0 48.5 19.5T789-348v40h39v75Zm-696-19v-456h107l320 320H332v56h194q-2 11-3.5 22t-1.5 22v36H132ZM813-94 97-810l20-20 716 716-20 20ZM212-508v56h56v-56h-56Zm120 0v56h56v-56h-56ZM212-628v56h56v-56h-56Zm360 56h56v-56h-56v56Zm120 0h56v-56h-56v56ZM353-708h475v251q-18-11-38.5-18.5T748-486v-22h-56v22.98Q675-483 659-478t-31 13v-43h-56v19l-83-83h19v-56h-56v19l-99-99Z"/>
    </Icon>
  );
});

IconMaterialKeyboardLockOffW100Filled.displayName = 'AmauiIconMaterialKeyboardLockOffW100Filled';

export default IconMaterialKeyboardLockOffW100Filled;
