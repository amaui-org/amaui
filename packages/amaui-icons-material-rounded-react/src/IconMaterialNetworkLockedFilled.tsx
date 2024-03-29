import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkLockedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkLockedFilled'

      short_name='NetworkLocked'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.875 22q-.35 0-.6-.25t-.25-.6v-3.3q0-.35.25-.6t.6-.25h.15v-1q0-.825.588-1.413Q19.2 14 20.025 14t1.413.587q.587.588.587 1.413v1h.15q.35 0 .6.25t.25.6v3.3q0 .35-.25.6t-.6.25Zm1.15-5h2v-1q0-.425-.287-.713Q20.45 15 20.025 15t-.713.287q-.287.288-.287.713ZM4.45 22q-.675 0-.937-.613-.263-.612.212-1.087l16.6-16.6q.475-.475 1.088-.213.612.263.612.938V12h-2q-2.075 0-3.537 1.462-1.463 1.463-1.463 3.538v5Z"/>
    </Icon>
  );
});

IconMaterialNetworkLockedFilled.displayName = 'AmauiIconMaterialNetworkLockedFilled';

export default IconMaterialNetworkLockedFilled;
