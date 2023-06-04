import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmsFailedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmsFailedW100Filled'

      short_name='SmsFailed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 5.85v5.4q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-5.4q0-.15-.1-.25T12 5.5q-.15 0-.25.1t-.1.25Zm.35 8.4q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.363-.138-.137-.363-.137-.2 0-.35.137-.15.138-.15.363 0 .2.15.35.15.15.35.15ZM3.3 17.7V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425H6.1l-1.525 1.525q-.35.35-.812.162Q3.3 18.2 3.3 17.7Z"/>
    </Icon>
  );
});

IconMaterialSmsFailedW100Filled.displayName = 'AmauiIconMaterialSmsFailedW100Filled';

export default IconMaterialSmsFailedW100Filled;
