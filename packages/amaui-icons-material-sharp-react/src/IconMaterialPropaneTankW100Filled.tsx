import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPropaneTankW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PropaneTankW100Filled'

      short_name='PropaneTank'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 13.15V9q0-1.125.787-1.912Q5.575 6.3 6.7 6.3v-3h8v3q1.125 0 1.913.788.787.787.787 1.912v4.15ZM7.4 6.3H10q0-.275.213-.488.212-.212.487-.212t.488.212q.212.213.212.488H14V4H7.4Zm-.7 14.4q-1.125 0-1.913-.787Q4 19.125 4 18v-4.15h13.4V18q0 1.125-.787 1.913-.788.787-1.913.787Z"/>
    </Icon>
  );
});

IconMaterialPropaneTankW100Filled.displayName = 'AmauiIconMaterialPropaneTankW100Filled';

export default IconMaterialPropaneTankW100Filled;
