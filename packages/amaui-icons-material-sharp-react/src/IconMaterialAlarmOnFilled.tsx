import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlarmOnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmOnFilled'

      short_name='AlarmOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.95 16.55 5.65-5.65-1.425-1.425L10.95 13.7l-2.125-2.125L7.4 13ZM12 22q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.926-2.85Q3 14.875 3 13t.712-3.513q.713-1.637 1.926-2.85 1.212-1.212 2.85-1.924Q10.125 4 12 4t3.513.713q1.637.712 2.85 1.924 1.212 1.213 1.925 2.85Q21 11.125 21 13t-.712 3.512q-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q13.875 22 12 22ZM2.75 8l-1.4-1.4L5.6 2.35 7 3.75Zm18.5 0L17 3.75l1.4-1.4 4.25 4.25Z"/>
    </Icon>
  );
});

IconMaterialAlarmOnFilled.displayName = 'AmauiIconMaterialAlarmOnFilled';

export default IconMaterialAlarmOnFilled;
