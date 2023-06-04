import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInboxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InboxW100'

      short_name='Inbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h12.4q.35 0 .575-.225Q19 18.55 19 18.2v-2.7h-3.75q-.5.95-1.363 1.475-.862.525-1.887.525t-1.887-.525Q9.25 16.45 8.75 15.5H5v2.7q0 .35.225.575Q5.45 19 5.8 19Zm6.2-2.2q.825 0 1.525-.413.7-.412 1.025-1.112.125-.25.3-.363.175-.112.575-.112H19v-9q0-.35-.225-.575Q18.55 5 18.2 5H5.8q-.35 0-.575.225Q5 5.45 5 5.8v9h3.575q.4 0 .575.112.175.113.3.363.325.7 1.025 1.112.7.413 1.525.413ZM5.8 19H5h14H18.2Z"/>
    </Icon>
  );
});

IconMaterialInboxW100.displayName = 'AmauiIconMaterialInboxW100';

export default IconMaterialInboxW100;
