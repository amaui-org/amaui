import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeepOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeepOff'

      short_name='KeepOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-840v80h-40v327l-80-80v-247H400v87l-87-87-33-33v-47h400ZM480-40l-40-40v-240H240v-80l80-80v-46L56-792l56-56 736 736-58 56-264-264h-6v240l-40 40ZM354-400h92l-44-44-2-2-46 46Zm126-193Zm-78 149Z"/>
    </Icon>
  );
});

IconMaterialKeepOff.displayName = 'AmauiIconMaterialKeepOff';

export default IconMaterialKeepOff;
