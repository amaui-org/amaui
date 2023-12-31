import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMountainFlagFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MountainFlagFilled'

      short_name='MountainFlag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-445-77 39-122-81 55-113h104v-280h280l-40 80 40 80H520v120h100l57 114-120 80-77-39ZM80-80l165-335 152 101 83-41 83 41 150-99L880-80H80Z"/>
    </Icon>
  );
});

IconMaterialMountainFlagFilled.displayName = 'AmauiIconMaterialMountainFlagFilled';

export default IconMaterialMountainFlagFilled;
