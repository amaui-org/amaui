import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEventBusyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventBusyW100Filled'

      short_name='EventBusy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 15.175-2.05 2.05q-.125.125-.25.125t-.25-.125q-.125-.125-.125-.25t.125-.25l2.05-2.05-2.05-2.05q-.125-.125-.125-.25t.125-.25Q9.575 12 9.7 12t.25.125l2.05 2.05 2.05-2.05q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25l-2.05 2.05 2.05 2.05q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125ZM5.8 20.7q-.65 0-1.075-.425Q4.3 19.85 4.3 19.2V6.8q0-.65.425-1.075Q5.15 5.3 5.8 5.3h2V3.4q0-.175.113-.288Q8.025 3 8.2 3t.288.112q.112.113.112.288v1.9h6.9V3.35q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V5.3h2q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h12.4q.35 0 .575-.225Q19 19.55 19 19.2v-8.4H5v8.4q0 .35.225.575Q5.45 20 5.8 20Z"/>
    </Icon>
  );
});

IconMaterialEventBusyW100Filled.displayName = 'AmauiIconMaterialEventBusyW100Filled';

export default IconMaterialEventBusyW100Filled;
