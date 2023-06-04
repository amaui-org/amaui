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
      <path d="m16.75 17 1.5 1.5q.1.1.238.113.137.012.262-.113t.125-.25q0-.125-.125-.25l-1.5-1.5 1.5-1.5q.1-.1.113-.238.012-.137-.113-.262t-.25-.125q-.125 0-.25.125l-1.5 1.5-1.5-1.5q-.1-.1-.238-.113-.137-.012-.262.113t-.125.25q0 .125.125.25l1.5 1.5-1.5 1.5q-.1.1-.113.238-.012.137.113.262t.25.125q.125 0 .25-.125Zm-12.2-.05q0 .425.338.65.337.225.712.05l5.6-2.425q.025-.125.1-.4.075-.275.175-.475L5.25 17v-4l4.5-1-4.5-1V7l9.7 4.1q.225-.1.588-.162.362-.063.687-.113L5.6 6.25q-.375-.175-.712.05-.338.225-.338.65Zm12.2 3.25q-1.55 0-2.625-1.075T13.05 16.5q0-1.55 1.075-2.625T16.75 12.8q1.55 0 2.625 1.075T20.45 16.5q0 1.55-1.075 2.625T16.75 20.2Zm-11.5-5.85V17 7v7.35Z"/>
    </Icon>
  );
});

IconMaterialCancelScheduleSendW100.displayName = 'AmauiIconMaterialCancelScheduleSendW100';

export default IconMaterialCancelScheduleSendW100;
