import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkunreadMailboxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkunreadMailboxW100'

      short_name='MarkunreadMailbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 20.7q-.65 0-1.075-.425Q3.3 19.85 3.3 19.2v-8.4q0-.65.425-1.075Q4.15 9.3 4.8 9.3h2V3.4q0-.325.213-.538.212-.212.537-.212h4.55q.325 0 .538.212.212.213.212.538v1.2q0 .325-.212.537-.213.213-.538.213H7.5v8.3q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V10h-2q-.35 0-.575.225Q4 10.45 4 10.8v8.4q0 .35.225.575Q4.45 20 4.8 20h14.4q.35 0 .575-.225Q20 19.55 20 19.2v-8.4q0-.35-.225-.575Q19.55 10 19.2 10H9.5v-.7h9.7q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425ZM4 10v3.65V13v1-4 10-10Z"/>
    </Icon>
  );
});

IconMaterialMarkunreadMailboxW100.displayName = 'AmauiIconMaterialMarkunreadMailboxW100';

export default IconMaterialMarkunreadMailboxW100;
