import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScheduleSendW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScheduleSendW100Filled'

      short_name='ScheduleSend'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.55 18.1v-4.95L9.75 12l-5.2-1.15V5.8l11.675 5.025q-1.875.225-3.325 1.4-1.45 1.175-1.7 3Zm12.2 2.1q-1.55 0-2.625-1.075T13.05 16.5q0-1.55 1.075-2.625T16.75 12.8q1.55 0 2.625 1.075T20.45 16.5q0 1.55-1.075 2.625T16.75 20.2Zm1.65-1.55.5-.5-1.8-1.8v-2.7h-.7v3Z"/>
    </Icon>
  );
});

IconMaterialScheduleSendW100Filled.displayName = 'AmauiIconMaterialScheduleSendW100Filled';

export default IconMaterialScheduleSendW100Filled;
