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
      <path d="M466-584v-57q-32-5-53-29.736-21-24.735-21-57.264 0-37 25.5-62.5T480-816q37 0 62.5 25.5T568-728q0 32.529-21 57.264Q526-646 494-641v57l264 152q14.25 8.171 22.125 21.914Q788-396.343 788-380v40q0 16.343-7.875 30.086Q772.25-296.171 758-288L510-145q-14.328 8-30.164 8Q464-137 450-145L202-288q-14.25-8.171-22.125-21.914Q172-323.657 172-340v-40q0-16.343 7.875-30.086Q187.75-423.829 202-432l264-152Zm-16 343L200-385v45q0 8 4 15.5t12 12.5l248 143q8 5 16 5t16-5l248-143q8-5 12-12.5t4-15.5v-45L510-241q-14.328 8-30.164 8Q464-233 450-241Zm16-185v-126L216-408l248 143q8 5 16 5t16-5l247-143-249-144v126h-28Zm14-242q25 0 42.5-17.5T540-728q0-25-17.5-42.5T480-788q-25 0-42.5 17.5T420-728q0 25 17.5 42.5T480-668Zm-6 504Z"/>
    </Icon>
  );
});

IconMaterialJoystickW100.displayName = 'AmauiIconMaterialJoystickW100';

export default IconMaterialJoystickW100;
