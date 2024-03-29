import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDevicesWearablesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesWearablesFilled'

      short_name='DevicesWearables'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M700 816q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM160 976q-33 0-56.5-23.5T80 896V256q0-33 23.5-56.5T160 176h320q33 0 56.5 23.5T560 256v154q-23 12-43 27.5T480 472v-96H160v400h257q17 51 51 92t81 68q-11 19-29.5 29.5T480 976H160Zm440-40v-64q-56-28-88-80.5T480 676q0-63 32-115.5t88-80.5v-64q0-17 11.5-28.5T640 376h120q17 0 28.5 11.5T800 416v64q56 28 88 80.5T920 676q0 63-32 115.5T800 872v64q0 17-11.5 28.5T760 976H640q-17 0-28.5-11.5T600 936Z"/>
    </Icon>
  );
});

IconMaterialDevicesWearablesFilled.displayName = 'AmauiIconMaterialDevicesWearablesFilled';

export default IconMaterialDevicesWearablesFilled;
