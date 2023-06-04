import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRearCameraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RearCameraW100Filled'

      short_name='RearCamera'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M646.965 402q11.035 0 18.535-7.465t7.5-18.5q0-11.035-7.465-18.535t-18.5-7.5Q636 350 628.5 357.465t-7.5 18.5q0 11.035 7.465 18.535t18.5 7.5ZM494 856h306V296H494v560Zm-362 28V590h179l-90 90 19 19 123-123-123-123-19 19 90 90H132V268h696v616H132Z"/>
    </Icon>
  );
});

IconMaterialRearCameraW100Filled.displayName = 'AmauiIconMaterialRearCameraW100Filled';

export default IconMaterialRearCameraW100Filled;
