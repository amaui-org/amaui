import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonitorHeartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorHeartW100'

      short_name='MonitorHeart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 9.65q-.15 0-.25-.1t-.1-.25V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v2.5q0 .15-.1.25t-.25.1q-.15 0-.25-.1T20 9.3V6.8q0-.3-.25-.55Q19.5 6 19.2 6H4.8q-.3 0-.55.25Q4 6.5 4 6.8v2.5q0 .15-.1.25t-.25.1ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2v-2.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.5q0 .3.25.55.25.25.55.25h14.4q.3 0 .55-.25.25-.25.25-.55v-2.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.5q0 .65-.425 1.075-.425.425-1.075.425Zm5.2-2.35q.1 0 .188-.05.087-.05.137-.15L14 8.8l1.675 3.35q.05.1.137.15.088.05.188.05h4.35q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-4.125l-1.9-3.8Q14.25 7.7 14 7.7t-.325.15L10 15.2l-1.675-3.35q-.05-.1-.137-.15-.088-.05-.188-.05H3.65q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h4.125l1.9 3.8q.05.1.137.15.088.05.188.05ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialMonitorHeartW100.displayName = 'AmauiIconMaterialMonitorHeartW100';

export default IconMaterialMonitorHeartW100;
