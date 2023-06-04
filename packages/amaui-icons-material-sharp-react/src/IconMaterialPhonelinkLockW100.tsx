import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhonelinkLockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkLockW100'

      short_name='PhonelinkLock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.65 15.55v-4.4h1.025v-1q0-.725.488-1.212.487-.488 1.212-.488t1.212.488q.488.487.488 1.212v1h.975v4.4Zm1.725-4.4h2v-1q0-.425-.288-.712-.287-.288-.712-.288t-.712.288q-.288.287-.288.712ZM7 21h10v-1.65H7ZM7 4.65h10V3H7ZM6.3 21.7V2.3h11.4v4.6H17V5.35H7v13.3h10V17.1h.7v4.6ZM7 4.65V3v1.65ZM7 21v-1.65V21Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkLockW100.displayName = 'AmauiIconMaterialPhonelinkLockW100';

export default IconMaterialPhonelinkLockW100;
