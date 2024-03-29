import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardOffFilled'

      short_name='KeyboardOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M766-88 87-766q-12-12-11.5-28.5T88-823q12-12 28.5-12t28.5 12l678 679q12 12 12 28t-12 28q-12 12-28.5 12T766-88ZM647-320l-80-80H360q-17 0-28.5 11.5T320-360q0 17 11.5 28.5T360-320h287ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm360 0h80v-80h-80v80ZM200-560h80v-80h-80v80Zm360 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM160-200q-33 0-56.5-23.5T80-280v-400q0-33 23.5-56.5T160-760h47l560 560H160Zm696-23L640-441v-79h-80l-40-41v-79h-79L321-760h479q33 0 56.5 23.5T880-680v401q0 17-6.5 31T856-223Z"/>
    </Icon>
  );
});

IconMaterialKeyboardOffFilled.displayName = 'AmauiIconMaterialKeyboardOffFilled';

export default IconMaterialKeyboardOffFilled;
