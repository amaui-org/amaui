import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditCalendarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditCalendarW100'

      short_name='EditCalendar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 20.7q-.65 0-1.075-.425Q4.3 19.85 4.3 19.2V6.8q0-.65.425-1.075Q5.15 5.3 5.8 5.3h2V3.4q0-.175.113-.288Q8.025 3 8.2 3t.288.112q.112.113.112.288v1.9h6.9V3.35q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V5.3h2q.65 0 1.075.425.425.425.425 1.075v5H19v-1H5v8.4q0 .35.225.575Q5.45 20 5.8 20h3.9v.7ZM5 10.1h14V6.8q0-.35-.225-.575Q18.55 6 18.2 6H5.8q-.35 0-.575.225Q5 6.45 5 6.8Zm14.725 5.325L18.5 14.2l.725-.725q.125-.125.25-.125t.25.125l.725.725q.125.125.125.25t-.125.25Zm-7.025 5.4V20.3q0-.15.05-.275.05-.125.175-.25L17.8 14.9l1.225 1.225L14.15 21q-.125.125-.25.175-.125.05-.275.05H13.1q-.175 0-.288-.112-.112-.113-.112-.288ZM5 10.1V6v4.1Z"/>
    </Icon>
  );
});

IconMaterialEditCalendarW100.displayName = 'AmauiIconMaterialEditCalendarW100';

export default IconMaterialEditCalendarW100;
