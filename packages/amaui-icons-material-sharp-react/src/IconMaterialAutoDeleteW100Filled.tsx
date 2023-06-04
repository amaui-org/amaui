import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoDeleteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoDeleteW100Filled'

      short_name='AutoDelete'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 4.6h6v.7h3.7V6h-1v4.225q-.15-.025-.35-.025H17q-.675 0-1.463.175-.787.175-1.387.45V8h-.7v3.2q-.95.575-1.75 1.587-.8 1.013-1.15 2.063V8h-.7v9h.35q0 .65.15 1.387.15.738.4 1.313H6.3V6h-1v-.7H9Zm8 7.6q2 0 3.4 1.4t1.4 3.4q0 2-1.4 3.4T17 21.8q-2 0-3.4-1.4T12.2 17q0-2 1.4-3.4t3.4-1.4Zm-.35 1.95v3l2 2 .5-.5-1.8-1.8v-2.7Z"/>
    </Icon>
  );
});

IconMaterialAutoDeleteW100Filled.displayName = 'AmauiIconMaterialAutoDeleteW100Filled';

export default IconMaterialAutoDeleteW100Filled;
