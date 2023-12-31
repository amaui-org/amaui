import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBook2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Book2Filled'

      short_name='Book2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-80q-58 0-99-41t-41-99v-520q0-58 41-99t99-41h500v600q-25 0-42.5 17.5T740-220q0 25 17.5 42.5T800-160v80H300Zm20-280h80v-440h-80v440Zm-20 200h373q-6-14-9.5-28.5T660-220q0-16 3-31t10-29H300q-26 0-43 17.5T240-220q0 26 17 43t43 17Z"/>
    </Icon>
  );
});

IconMaterialBook2Filled.displayName = 'AmauiIconMaterialBook2Filled';

export default IconMaterialBook2Filled;
