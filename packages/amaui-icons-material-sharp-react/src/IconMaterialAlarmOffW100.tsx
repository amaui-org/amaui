import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlarmOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmOffW100'

      short_name='AlarmOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.675 16.15-.5-.5q.25-.675.375-1.35t.125-1.3q0-2.925-2.037-4.963Q14.6 6 11.675 6q-.7 0-1.35.125-.65.125-1.275.4l-.55-.55Q9.175 5.7 9.95 5.5q.775-.2 1.725-.2 1.6 0 3 .6t2.45 1.65q1.05 1.05 1.65 2.45.6 1.4.6 3 0 .8-.163 1.6-.162.8-.537 1.55Zm1.75-8.65-3.25-3.25.5-.5L20.925 7Zm-.1 14.15-3.2-3.2q-1 1-2.4 1.625t-3.05.625q-1.6 0-3-.6t-2.45-1.65Q5.175 17.4 4.575 16q-.6-1.4-.6-3 0-1.55.6-2.975t1.65-2.475L4.55 5.875 2.925 7.5l-.5-.5L4.05 5.375 2.425 3.75l.5-.5 17.9 17.9ZM11.675 20q1.425 0 2.688-.525 1.262-.525 2.262-1.525l-9.9-9.9q-1 1-1.525 2.275Q4.675 11.6 4.675 13q0 2.925 2.038 4.962Q8.75 20 11.675 20Zm0-7Zm1.95-1.925Z"/>
    </Icon>
  );
});

IconMaterialAlarmOffW100.displayName = 'AmauiIconMaterialAlarmOffW100';

export default IconMaterialAlarmOffW100;
