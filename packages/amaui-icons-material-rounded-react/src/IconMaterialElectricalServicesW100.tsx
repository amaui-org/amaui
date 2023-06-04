import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElectricalServicesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricalServicesW100'

      short_name='ElectricalServices'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.35 14.35v-.7H20q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 4v-.7H20q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-3.35 1q-.575 0-.962-.587-.388-.588-.388-1.413h-2v-2.7h2q0-.825.388-1.413.387-.587.962-.587h1.6q.325 0 .538.212.212.213.212.538v5.2q0 .325-.212.538-.213.212-.538.212Zm-7-3q-1.4 0-2.375-.975Q3.65 14.4 3.65 13t.975-2.375Q5.6 9.65 7 9.65h1.5q.875 0 1.512-.638.638-.637.638-1.512t-.638-1.513Q9.375 5.35 8.5 5.35H5q-.15 0-.25-.1T4.65 5q0-.15.1-.25t.25-.1h3.5q1.2 0 2.025.825T11.35 7.5q0 1.2-.825 2.025T8.5 10.35H7q-1.1 0-1.875.775Q4.35 11.9 4.35 13t.775 1.875Q5.9 15.65 7 15.65h2.65v.7Z"/>
    </Icon>
  );
});

IconMaterialElectricalServicesW100.displayName = 'AmauiIconMaterialElectricalServicesW100';

export default IconMaterialElectricalServicesW100;
