import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutboxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboxW100Filled'

      short_name='Outbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 13.1q-.15 0-.25-.1t-.1-.25v-4.5l-2.025 2.025q-.1.1-.225.1t-.25-.125q-.125-.125-.125-.25t.125-.25l2.325-2.325q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175l2.35 2.35q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125l-2-2v4.5q0 .15-.1.25t-.25.1Zm-6.2 6.6q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm6.2-2.9q.825 0 1.525-.413.7-.412 1.025-1.112.125-.25.3-.363.175-.112.575-.112H19v-9q0-.35-.225-.575Q18.55 5 18.2 5H5.8q-.35 0-.575.225Q5 5.45 5 5.8v9h3.575q.4 0 .575.112.175.113.3.363.325.7 1.025 1.112.7.413 1.525.413Z"/>
    </Icon>
  );
});

IconMaterialOutboxW100Filled.displayName = 'AmauiIconMaterialOutboxW100Filled';

export default IconMaterialOutboxW100Filled;
