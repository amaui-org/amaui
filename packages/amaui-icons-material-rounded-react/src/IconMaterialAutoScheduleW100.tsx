import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoScheduleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoScheduleW100'

      short_name='AutoSchedule'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 20.7q-.65 0-1.075-.425Q4.3 19.85 4.3 19.2V6.8q0-.65.425-1.075Q5.15 5.3 5.8 5.3h2V3.4q0-.175.113-.288Q8.025 3 8.2 3t.288.112q.112.113.112.288v1.9h6.9V3.35q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V5.3h2q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h12.4q.3 0 .55-.25.25-.25.25-.55v-8.4H5v8.4q0 .3.25.55.25.25.55.25ZM5 10.1h14V6.8q0-.3-.25-.55Q18.5 6 18.2 6H5.8q-.3 0-.55.25Q5 6.5 5 6.8Zm0 0V6v4.1Zm6.7 7.075-.45-1.025-1.025-.45q-.2-.1-.2-.3 0-.2.2-.3l1.025-.45.45-1.025q.1-.2.3-.2.2 0 .3.2l.45 1.025 1.025.45q.2.1.2.3 0 .2-.2.3l-1.025.45-.45 1.025q-.1.2-.3.2-.2 0-.3-.2Z"/>
    </Icon>
  );
});

IconMaterialAutoScheduleW100.displayName = 'AmauiIconMaterialAutoScheduleW100';

export default IconMaterialAutoScheduleW100;
