import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlarmAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmAddW100'

      short_name='AlarmAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16.35q.15 0 .25-.1t.1-.225V13.35H15q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.225-.1H12.35V10q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.225v2.675H9q-.15 0-.25.1t-.1.25q0 .15.1.25t.225.1h2.675V16q0 .15.1.25t.25.1Zm0 4.35q-1.6 0-3-.6t-2.45-1.65Q5.5 17.4 4.9 16q-.6-1.4-.6-3t.6-3q.6-1.4 1.65-2.45Q7.6 6.5 9 5.9q1.4-.6 3-.6t3 .6q1.4.6 2.45 1.65Q18.5 8.6 19.1 10q.6 1.4.6 3t-.6 3q-.6 1.4-1.65 2.45Q16.4 19.5 15 20.1q-1.4.6-3 .6Zm0-7.7ZM3.475 7.275q-.1.1-.225.1T3 7.25q-.125-.125-.125-.25T3 6.75l2.775-2.775q.1-.1.225-.1T6.25 4q.125.125.125.25t-.125.25ZM20.5 7.25l-2.775-2.775q-.1-.1-.1-.225T17.75 4q.125-.125.25-.125t.25.125l2.775 2.775q.1.1.1.225T21 7.25q-.125.125-.25.125t-.25-.125ZM12 20q2.9 0 4.95-2.05Q19 15.9 19 13q0-2.9-2.05-4.95Q14.9 6 12 6 9.1 6 7.05 8.05 5 10.1 5 13q0 2.9 2.05 4.95Q9.1 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialAlarmAddW100.displayName = 'AmauiIconMaterialAlarmAddW100';

export default IconMaterialAlarmAddW100;
