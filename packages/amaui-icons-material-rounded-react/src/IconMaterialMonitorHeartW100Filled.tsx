import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonitorHeartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorHeartW100Filled'

      short_name='MonitorHeart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2v-4.85h4.475l1.9 3.8q.05.1.137.15.088.05.188.05t.188-.05q.087-.05.137-.15L14 8.8l1.675 3.35q.05.1.137.15.088.05.188.05h4.7v4.85q0 .65-.425 1.075-.425.425-1.075.425Zm5.2-3.5-1.675-3.35q-.05-.1-.137-.15-.088-.05-.188-.05H3.3V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v4.85h-4.475l-1.9-3.8q-.05-.075-.125-.113-.075-.037-.2-.037-.1 0-.188.037-.087.038-.137.113Z"/>
    </Icon>
  );
});

IconMaterialMonitorHeartW100Filled.displayName = 'AmauiIconMaterialMonitorHeartW100Filled';

export default IconMaterialMonitorHeartW100Filled;
