import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallW100'

      short_name='Call'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.6 19.55q-2.425 0-4.962-1.3-2.538-1.3-4.6-3.363-2.063-2.062-3.375-4.587Q4.35 7.775 4.35 5.35q0-.45.3-.75t.75-.3h2q.45 0 .762.262.313.263.413.688l.45 2.05q.075.4-.013.725-.087.325-.362.55L6.55 10.5q1.4 2.35 3.125 4.05 1.725 1.7 4.075 3l2.05-2.15q.275-.275.563-.363.287-.087.637-.012l1.7.35q.425.1.688.413.262.312.262.762v1.95q0 .45-.3.75t-.75.3ZM6.2 9.85l2-1.8q.125-.1.163-.275Q8.4 7.6 8.35 7.45L7.9 5.4q-.05-.2-.175-.3Q7.6 5 7.4 5h-2q-.15 0-.25.1t-.1.25q0 1.025.313 2.175.312 1.15.837 2.325Zm12.4 9q.15 0 .25-.1t.1-.25v-1.95q0-.2-.1-.325t-.3-.175l-1.7-.35q-.15-.05-.263-.012-.112.037-.237.162l-1.95 2q1.025.525 2.213.763 1.187.237 1.987.237Zm-4.2-1Zm-8.2-8Z"/>
    </Icon>
  );
});

IconMaterialCallW100.displayName = 'AmauiIconMaterialCallW100';

export default IconMaterialCallW100;
