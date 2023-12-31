import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBook4Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Book4Filled'

      short_name='Book4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80q-51 0-85.5-34.5T120-200v-560q0-50 34.5-85t85.5-35h360q33 0 56.5 23.5T680-800v480q0 33-23.5 56.5T600-240H240q-17 0-28.5 11.5T200-200q0 17 11.5 28.5T240-160h520v-600q0-17 11.5-28.5T800-800q17 0 28.5 11.5T840-760v600q0 33-23.5 56.5T760-80H240Zm80-240q17 0 28.5-11.5T360-360v-400q0-17-11.5-28.5T320-800q-17 0-28.5 11.5T280-760v400q0 17 11.5 28.5T320-320Z"/>
    </Icon>
  );
});

IconMaterialBook4Filled.displayName = 'AmauiIconMaterialBook4Filled';

export default IconMaterialBook4Filled;
