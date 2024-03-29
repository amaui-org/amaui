import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardOff'

      short_name='KeyboardOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M794-59 87-766q-12-12-11.5-28.5T88-823q12-12 28.5-12t28.5 12l706 707-57 57ZM360-320q-17 0-28.5-11.5T320-360q0-17 11.5-28.5T360-400h207l80 80H360ZM200-440v-80h80v80h-80Zm120 0v-80h80v80h-80Zm360 0v-80h80v80h-80ZM200-560v-80h80v80h-80Zm360 0v-80h80v80h-80Zm120 0v-80h80v80h-80Zm176 337-56-57v-400H401l-80-80h479q33 0 56.5 23.5T880-680v401q0 17-6.5 31T856-223Zm-696 23q-33 0-56.5-23.5T80-280v-400q0-33 23.5-56.5T160-760h47l80 80H160v400h527l80 80H160Zm281-440h79l-1 79-78-79Zm119 120h80l-1 79-79-79Zm-187 40Zm227 0Z"/>
    </Icon>
  );
});

IconMaterialKeyboardOff.displayName = 'AmauiIconMaterialKeyboardOff';

export default IconMaterialKeyboardOff;
