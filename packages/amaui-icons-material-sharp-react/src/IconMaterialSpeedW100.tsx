import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeedW100'

      short_name='Speed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.85 15.1q.425.425 1.088.375.662-.05.962-.475l5.15-7L11 13.1q-.45.3-.512.937-.063.638.362 1.063ZM5.1 18.7q-.2 0-.362-.1-.163-.1-.288-.3-.45-.8-.8-1.85Q3.3 15.4 3.3 14q0-1.775.675-3.363.675-1.587 1.837-2.775 1.163-1.187 2.763-1.874Q10.175 5.3 12 5.3q1.35 0 2.413.313 1.062.312 2.162.962l-.625.45q-.9-.5-1.862-.763Q13.125 6 12 6 8.675 6 6.338 8.337 4 10.675 4 14q0 1.05.287 2.075Q4.575 17.1 5.1 18h13.8q.575-.95.838-1.975Q20 15 20 13.9q0-.9-.237-1.938-.238-1.037-.763-1.912l.45-.625q.725 1.275.988 2.312.262 1.038.262 2.163 0 1.25-.275 2.312-.275 1.063-.875 2.188-.075.125-.25.212-.175.088-.4.088ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialSpeedW100.displayName = 'AmauiIconMaterialSpeedW100';

export default IconMaterialSpeedW100;
