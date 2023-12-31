import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialJoystickW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JoystickW100Filled'

      short_name='Joystick'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-584v-57q-32-5-53-29.5T392-728q0-37 25.5-62.5T480-816q37 0 62.5 25.5T568-728q0 33-21 57.5T494-641v57l264 152q14 8 22 22t8 30v40q0 16-8 30t-22 22L510-145q-14 8-30 8t-30-8L202-288q-14-8-22-22t-8-30v-40q0-16 8-30t22-22l264-152Zm0 158v-126L216-408l248 143q8 5 16 5t16-5l247-143-249-144v126h-28Z"/>
    </Icon>
  );
});

IconMaterialJoystickW100Filled.displayName = 'AmauiIconMaterialJoystickW100Filled';

export default IconMaterialJoystickW100Filled;
