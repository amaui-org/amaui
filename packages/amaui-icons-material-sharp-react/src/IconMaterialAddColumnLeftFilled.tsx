import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddColumnLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddColumnLeftFilled'

      short_name='AddColumnLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-120v-720h320v720H560Zm-400 0v-164q10 2 19.5 3t20.5 1q83 0 141.5-58T400-480q0-84-58.5-142T200-680q-11 0-20.5 1t-19.5 3v-164h320v720H160Zm0-240v-80H80v-80h80v-80h80v80h80v80h-80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialAddColumnLeftFilled.displayName = 'AmauiIconMaterialAddColumnLeftFilled';

export default IconMaterialAddColumnLeftFilled;
