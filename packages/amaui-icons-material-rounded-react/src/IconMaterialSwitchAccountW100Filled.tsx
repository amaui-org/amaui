import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchAccountW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccountW100Filled'

      short_name='SwitchAccount'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 11.6q.975 0 1.663-.688.687-.687.687-1.662 0-.975-.687-1.663Q14.975 6.9 14 6.9q-.975 0-1.662.687-.688.688-.688 1.663 0 .975.688 1.662.687.688 1.662.688Zm-5.2 5.1q-.65 0-1.075-.425Q7.3 15.85 7.3 15.2V4.8q0-.65.425-1.075Q8.15 3.3 8.8 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm-4 4q-.65 0-1.075-.425Q3.3 19.85 3.3 19.2V7.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V19.2q0 .35.225.575Q4.45 20 4.8 20h11.55q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM8.75 16h10.5q-1.15-1.225-2.487-1.762Q15.425 13.7 14 13.7q-1.425 0-2.762.538Q9.9 14.775 8.75 16Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccountW100Filled.displayName = 'AmauiIconMaterialSwitchAccountW100Filled';

export default IconMaterialSwitchAccountW100Filled;
