import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneLockedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneLockedW100Filled'

      short_name='PhoneLocked'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.5 9.7V5.3h1v-1q0-.725.488-1.213.487-.487 1.212-.487t1.213.487q.487.488.487 1.213v1h1v4.4Zm1.7-4.4h2v-1q0-.425-.287-.713-.288-.287-.713-.287t-.712.287q-.288.288-.288.713Zm2.175 14.25q-2.425.025-4.962-1.275-2.538-1.3-4.613-3.362-2.075-2.063-3.387-4.601Q4.1 7.775 4.1 5.35q0-.25.013-.525.012-.275.062-.525h3.95l.825 3.775L6.3 10.5q1.4 2.35 3.125 4.05 1.725 1.7 4.075 3l2.55-2.675 3.35.7v3.9q-.225.05-.512.063-.288.012-.513.012Z"/>
    </Icon>
  );
});

IconMaterialPhoneLockedW100Filled.displayName = 'AmauiIconMaterialPhoneLockedW100Filled';

export default IconMaterialPhoneLockedW100Filled;
