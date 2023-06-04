import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCancelScheduleSendW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CancelScheduleSendW100'

      short_name='CancelScheduleSend'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.55 18.1V5.8l11.675 5.025q-.325.05-.687.113-.363.062-.588.162L5.25 7v4l4.5 1-4.5 1v4l6.225-2.65q-.1.2-.175.475-.075.275-.1.4Zm12.2 2.1q-1.55 0-2.625-1.075T13.05 16.5q0-1.55 1.075-2.625T16.75 12.8q1.55 0 2.625 1.075T20.45 16.5q0 1.55-1.075 2.625T16.75 20.2Zm-11.5-5.85V7v10Zm9.75 4.4L16.75 17l1.75 1.75.5-.5-1.75-1.75L19 14.75l-.5-.5L16.75 16 15 14.25l-.5.5 1.75 1.75-1.75 1.75Z"/>
    </Icon>
  );
});

IconMaterialCancelScheduleSendW100.displayName = 'AmauiIconMaterialCancelScheduleSendW100';

export default IconMaterialCancelScheduleSendW100;
