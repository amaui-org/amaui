import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardOnscreenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardOnscreenFilled'

      short_name='KeyboardOnscreen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M360 776h240q17 0 28.5-11.5T640 736q0-17-11.5-28.5T600 696H360q-17 0-28.5 11.5T320 736q0 17 11.5 28.5T360 776ZM200 656h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM160 896q-33 0-56.5-23.5T80 816V336q0-33 23.5-56.5T160 256h640q33 0 56.5 23.5T880 336v480q0 33-23.5 56.5T800 896H160Zm0-440h640V336H160v120Z"/>
    </Icon>
  );
});

IconMaterialKeyboardOnscreenFilled.displayName = 'AmauiIconMaterialKeyboardOnscreenFilled';

export default IconMaterialKeyboardOnscreenFilled;
