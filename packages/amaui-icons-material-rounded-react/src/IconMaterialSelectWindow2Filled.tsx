import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSelectWindow2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectWindow2Filled'

      short_name='SelectWindow2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-360v-200q0-50-35-85t-85-35H240v-120q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v360q0 33-23.5 56.5T800-360ZM160-80q-33 0-56.5-23.5T80-160v-360q0-33 23.5-56.5T160-600h480q33 0 56.5 23.5T720-520v360q0 33-23.5 56.5T640-80H160Z"/>
    </Icon>
  );
});

IconMaterialSelectWindow2Filled.displayName = 'AmauiIconMaterialSelectWindow2Filled';

export default IconMaterialSelectWindow2Filled;
