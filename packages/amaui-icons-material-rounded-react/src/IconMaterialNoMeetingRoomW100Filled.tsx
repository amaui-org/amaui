import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoMeetingRoomW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoMeetingRoomW100Filled'

      short_name='NoMeetingRoom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.425 13.6-.7-.7V6h-2v4.9l-6.55-6.6h5.8q.325 0 .538.212.212.213.212.538v.25h1.95q.325 0 .537.212.213.213.213.538Zm2.75 6.55-5.45-5.45v4.25q0 .325-.212.537-.213.213-.538.213h-8.3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.65V7.3l-2.45-2.45q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l15.3 15.3q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialNoMeetingRoomW100Filled.displayName = 'AmauiIconMaterialNoMeetingRoomW100Filled';

export default IconMaterialNoMeetingRoomW100Filled;
