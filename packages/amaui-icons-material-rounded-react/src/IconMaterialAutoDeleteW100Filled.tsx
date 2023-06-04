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
      <path d="M17 12.2q2 0 3.4 1.4t1.4 3.4q0 2-1.4 3.4T17 21.8q-2 0-3.4-1.4T12.2 17q0-2 1.4-3.4t3.4-1.4Zm.35 4.65V14.5q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.35q0 .15.05.275.05.125.175.25L18.4 18.9q.1.1.238.112.137.013.262-.112t.125-.25q0-.125-.125-.25ZM9.75 4.6h4.5q.3 0 .513.2.212.2.237.5h3.35q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-.65v4.225q-.15-.025-.35-.025H17q-.675 0-1.463.175-.787.175-1.387.45V8.35q0-.15-.1-.25T13.8 8q-.15 0-.25.1t-.1.25v2.85q-.95.575-1.75 1.587-.8 1.013-1.15 2.063v-6.5q0-.15-.1-.25T10.2 8q-.15 0-.25.1t-.1.25v8.3q0 .15.1.25t.25.1q0 .65.15 1.387.15.738.4 1.313H7.8q-.65 0-1.075-.425Q6.3 18.85 6.3 18.2V6h-.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H9q.025-.3.238-.5.212-.2.512-.2Z"/>
    </Icon>
  );
});

IconMaterialAutoDeleteW100Filled.displayName = 'AmauiIconMaterialAutoDeleteW100Filled';

export default IconMaterialAutoDeleteW100Filled;
