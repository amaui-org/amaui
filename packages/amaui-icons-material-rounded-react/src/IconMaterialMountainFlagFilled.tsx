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
      <path d="m462-436-59 30-122-81 33-68q10-20 29.5-32.5T386-600h54v-240q0-17 11.5-28.5T480-880h208q11 0 17 9.5t1 19.5l-22 42q-2 5-2 9t2 9l22 42q5 10-1 19.5t-17 9.5H520v120h50q23 0 42 12t30 32l35 70-120 80-59-30q-8-5-18-5t-18 5ZM108-138l137-277 133 88q9 6 19.5 7t20.5-4l62-31 62 31q10 5 20.5 4.5T582-326l131-87 138 275q10 20-1.5 39T815-80H144q-23 0-34.5-19t-1.5-39Z"/>
    </Icon>
  );
});

IconMaterialMountainFlagFilled.displayName = 'AmauiIconMaterialMountainFlagFilled';

export default IconMaterialMountainFlagFilled;
