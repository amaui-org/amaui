import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlarmAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmAdd'

      short_name='AlarmAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 17h2v-3h3v-2h-3V9h-2v3H8v2h3Zm1 5q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.926-2.85Q3 14.875 3 13t.712-3.513q.713-1.637 1.926-2.85 1.212-1.212 2.85-1.924Q10.125 4 12 4t3.513.713q1.637.712 2.85 1.924 1.212 1.213 1.925 2.85Q21 11.125 21 13t-.712 3.512q-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q13.875 22 12 22Zm0-9ZM5.6 2.35 7 3.75 2.75 8l-1.4-1.4Zm12.8 0 4.25 4.25-1.4 1.4L17 3.75ZM12 20q2.925 0 4.962-2.038Q19 15.925 19 13t-2.038-4.963Q14.925 6 12 6T7.038 8.037Q5 10.075 5 13q0 2.925 2.038 4.962Q9.075 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialAlarmAdd.displayName = 'AmauiIconMaterialAlarmAdd';

export default IconMaterialAlarmAdd;
