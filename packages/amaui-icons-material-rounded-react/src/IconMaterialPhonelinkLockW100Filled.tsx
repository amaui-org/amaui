import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhonelinkLockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkLockW100Filled'

      short_name='PhonelinkLock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.55 15.55q-.35 0-.625-.275t-.275-.625v-2.6q0-.35.275-.625t.625-.275h.125v-1q0-.725.488-1.212.487-.488 1.212-.488t1.212.488q.488.487.488 1.212v1h.125q.35 0 .6.275t.25.625v2.6q0 .35-.275.625t-.625.275Zm.825-4.4h2v-1q0-.425-.288-.712-.287-.288-.712-.288t-.712.288q-.288.287-.288.712ZM7.8 21.7q-.625 0-1.062-.438Q6.3 20.825 6.3 20.2V3.8q0-.625.438-1.063Q7.175 2.3 7.8 2.3h8.4q.625 0 1.062.437.438.438.438 1.063v3.1H17V5.35H7v13.3h10V17.1h.7v3.1q0 .625-.438 1.062-.437.438-1.062.438Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkLockW100Filled.displayName = 'AmauiIconMaterialPhonelinkLockW100Filled';

export default IconMaterialPhonelinkLockW100Filled;
