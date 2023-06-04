import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUngroupW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UngroupW100Filled'

      short_name='Ungroup'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m348 727-19-19 198-198H346v-28h228v228h-28V529L348 727Zm412-151V296H480v-28h308v308h-28ZM232 884q-26 0-43-17t-17-43V268h28v556q0 12 10 22t22 10h556v28H232Z"/>
    </Icon>
  );
});

IconMaterialUngroupW100Filled.displayName = 'AmauiIconMaterialUngroupW100Filled';

export default IconMaterialUngroupW100Filled;
