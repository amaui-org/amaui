import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowCoolDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCoolDownW100Filled'

      short_name='ArrowCoolDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.87-135q-5.87 0-10.87-2-5-2-10-7L244-359q-4-4-4.5-9.5t3.5-9.5q4-5 10-4.5t10 4.5l203 202v-270q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v271l204-203q3.75-4 9.38-4 5.62 0 9.79 4 3.83 3.67 3.83 9.33 0 5.67-4 9.67L501-144q-5 5-10.13 7-5.14 2-11 2Zm.09-405q-5.96 0-9.96-4.03-4-4.02-4-9.97v-92q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v93q0 5.53-4.04 9.26-4.03 3.74-10 3.74Zm0-200q-5.96 0-9.96-4.03-4-4.02-4-9.97v-52q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v53q0 5.53-4.04 9.26-4.03 3.74-10 3.74Z"/>
    </Icon>
  );
});

IconMaterialArrowCoolDownW100Filled.displayName = 'AmauiIconMaterialArrowCoolDownW100Filled';

export default IconMaterialArrowCoolDownW100Filled;
