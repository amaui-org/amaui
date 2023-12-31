import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardOffW100Filled'

      short_name='KeyboardOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M824-102 146-780q-4-4-4.5-9.5T146-800q5-5 10-5t10 5l678 678q4 4 4.5 9.5T844-102q-5 5-10 5t-10-5ZM634-332l-56-56H360q-11 0-19.5 8t-8.5 20q0 11 8.5 19.5T360-332h274ZM212-452h56v-56h-56v56Zm120 0h56v-56h-56v56Zm360 0h56v-56h-56v56ZM212-572h56v-56h-56v56Zm360 0h56v-56h-56v56Zm120 0h56v-56h-56v56ZM192-252q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h66l456 456H192Zm618-17L628-452v-56h-57l-63-64v-56h-57l-79-80h396q26 0 43 17t17 43v336q0 13-5 24t-13 19Z"/>
    </Icon>
  );
});

IconMaterialKeyboardOffW100Filled.displayName = 'AmauiIconMaterialKeyboardOffW100Filled';

export default IconMaterialKeyboardOffW100Filled;
