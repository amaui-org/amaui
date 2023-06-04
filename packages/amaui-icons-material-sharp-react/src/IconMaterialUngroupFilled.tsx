import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUngroupFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UngroupFilled'

      short_name='Ungroup'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m348 764-56-56 172-172H320v-80h280v280h-80V592L348 764Zm412-188V296H480v-80h360v360h-80ZM200 936q-33 0-56.5-23.5T120 856V216h80v640h640v80H200Z"/>
    </Icon>
  );
});

IconMaterialUngroupFilled.displayName = 'AmauiIconMaterialUngroupFilled';

export default IconMaterialUngroupFilled;
