import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSendAndArchiveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendAndArchiveW100'

      short_name='SendAndArchive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.4 17.875-1.55-1.55q-.125-.125-.25-.125t-.25.125q-.125.125-.125.25t.125.25l2 2q.175.175.4.175.225 0 .4-.175l2-2q.125-.125.125-.25t-.125-.25q-.125-.125-.25-.125t-.25.125l-1.55 1.55v-3.75q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25ZM4.55 16.95q0 .425.338.65.337.225.712.05l5.6-2.425q.025-.125.1-.4.075-.275.175-.475L5.25 17v-4l4.5-1-4.5-1V7l9.7 4.1q.225-.1.588-.162.362-.063.687-.113L5.6 6.25q-.375-.175-.712.05-.338.225-.338.65Zm12.2 3.25q-1.55 0-2.625-1.075T13.05 16.5q0-1.55 1.075-2.625T16.75 12.8q1.55 0 2.625 1.075T20.45 16.5q0 1.55-1.075 2.625T16.75 20.2Zm-11.5-5.85V17 7v7.35Z"/>
    </Icon>
  );
});

IconMaterialSendAndArchiveW100.displayName = 'AmauiIconMaterialSendAndArchiveW100';

export default IconMaterialSendAndArchiveW100;
