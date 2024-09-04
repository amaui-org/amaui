import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSelectWindow2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectWindow2'

      short_name='SelectWindow2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-160v-360H160v360h480Zm80-200v-80h80v-360H320v200h-80v-200q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v360q0 33-23.5 56.5T800-360h-80ZM160-80q-33 0-56.5-23.5T80-160v-360q0-33 23.5-56.5T160-600h480q33 0 56.5 23.5T720-520v360q0 33-23.5 56.5T640-80H160Zm400-603ZM400-340Z"/>
    </Icon>
  );
});

IconMaterialSelectWindow2.displayName = 'AmauiIconMaterialSelectWindow2';

export default IconMaterialSelectWindow2;
