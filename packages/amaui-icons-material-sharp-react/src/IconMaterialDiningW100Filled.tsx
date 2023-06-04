import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDiningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiningW100Filled'

      short_name='Dining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 20.7V3.3h17.4v17.4Zm5.1-2.1h.7v-6.4q.725-.125 1.212-.638.488-.512.488-1.262V6.4h-.7v3.75h-1V6.4h-.7v3.75h-1V6.4h-.7v3.9q0 .75.488 1.262.487.513 1.212.638Zm6 0h.7v-6.2q.8-.275 1.275-1.075.475-.8.475-1.925 0-1.3-.6-2.15-.6-.85-1.5-.85t-1.5.85q-.6.85-.6 2.15 0 1.125.475 1.925T14.4 12.4Z"/>
    </Icon>
  );
});

IconMaterialDiningW100Filled.displayName = 'AmauiIconMaterialDiningW100Filled';

export default IconMaterialDiningW100Filled;
