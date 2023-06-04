import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlarmOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmOnW100'

      short_name='AlarmOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.95 15.65 4.75-4.75-.5-.5-4.25 4.25L8.8 12.5l-.5.5ZM12 20.7q-1.6 0-3-.6t-2.45-1.65Q5.5 17.4 4.9 16q-.6-1.4-.6-3t.6-3q.6-1.4 1.65-2.45Q7.6 6.5 9 5.9q1.4-.6 3-.6t3 .6q1.4.6 2.45 1.65Q18.5 8.6 19.1 10q.6 1.4.6 3t-.6 3q-.6 1.4-1.65 2.45Q16.4 19.5 15 20.1q-1.4.6-3 .6Zm0-7.7ZM3.25 7.5l-.5-.5L6 3.75l.5.5Zm17.5 0L17.5 4.25l.5-.5L21.25 7ZM12 20q2.9 0 4.95-2.05Q19 15.9 19 13q0-2.9-2.05-4.95Q14.9 6 12 6 9.1 6 7.05 8.05 5 10.1 5 13q0 2.9 2.05 4.95Q9.1 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialAlarmOnW100.displayName = 'AmauiIconMaterialAlarmOnW100';

export default IconMaterialAlarmOnW100;
