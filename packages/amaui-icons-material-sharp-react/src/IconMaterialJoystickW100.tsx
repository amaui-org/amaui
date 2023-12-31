import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialJoystickW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JoystickW100'

      short_name='Joystick'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-584v-57q-32-5-53-29.5T392-728q0-37 25.5-62.5T480-816q37 0 62.5 25.5T568-728q0 33-21 57.5T494-641v57l294 170v108L510-145q-14 8-30 8t-30-8L172-306v-108l294-170ZM200-385v63l280 162 280-162v-63L480-224 200-385Zm266-41v-126L216-408l264 152 263-152-249-144v126h-28Zm14-242q25 0 42.5-17.5T540-728q0-25-17.5-42.5T480-788q-25 0-42.5 17.5T420-728q0 25 17.5 42.5T480-668Zm0 508Z"/>
    </Icon>
  );
});

IconMaterialJoystickW100.displayName = 'AmauiIconMaterialJoystickW100';

export default IconMaterialJoystickW100;
