import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMountainFlagW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MountainFlagW100'

      short_name='MountainFlag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m337-419 64 43 65-33q6-3 13.5-3t13.5 3l66 33 64-43-41-83q-4-8-12-13t-17-5H406q-9 0-16.5 5T378-502l-41 83ZM209-160h541L635-393l-60 40q-7 5-14.5 5.5T545-351l-65-33-65 32q-8 4-15.5 3.5T385-354l-61-40-115 234Zm3 28q-17 0-26-14t-1-29l167-340q8-15 22.5-24t31.5-9h60v-250q0-13 8.5-21.5T496-828h158q8 0 12.5 7t.5 15l-13 25q-2 3-2 7t2 7l13 25q4 8-.5 15t-12.5 7H494v172h57q17 0 31 9t22 24l170 340q8 15-1 29t-26 14H212Zm268-252Z"/>
    </Icon>
  );
});

IconMaterialMountainFlagW100.displayName = 'AmauiIconMaterialMountainFlagW100';

export default IconMaterialMountainFlagW100;
