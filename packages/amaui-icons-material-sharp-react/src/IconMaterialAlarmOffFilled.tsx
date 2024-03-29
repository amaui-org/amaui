import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlarmOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmOffFilled'

      short_name='AlarmOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.95 17.25 7.85 5q.95-.5 1.988-.75Q10.875 4 12 4q1.85 0 3.488.7 1.637.7 2.862 1.937 1.225 1.238 1.938 2.888Q21 11.175 21 13.1q0 1.125-.275 2.162-.275 1.038-.775 1.988ZM21.25 8 17 3.75l1.4-1.4 4.25 4.25Zm-.75 15.4-3.15-3.15q-1.125.825-2.487 1.288Q13.5 22 12 22q-1.85 0-3.488-.7-1.637-.7-2.862-1.9t-1.938-2.825Q3 14.95 3 13.1q0-1.55.463-2.912Q3.925 8.825 4.8 7.7l-.85-.85-1.2 1.2-1.4-1.4 1.2-1.2L.7 3.6l1.4-1.4L21.9 22Z"/>
    </Icon>
  );
});

IconMaterialAlarmOffFilled.displayName = 'AmauiIconMaterialAlarmOffFilled';

export default IconMaterialAlarmOffFilled;
