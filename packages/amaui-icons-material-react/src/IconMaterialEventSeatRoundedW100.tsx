import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventSeatRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventSeatRoundedW100'
      short_name='EventSeat'

      {...props}
    >
      <path d="M12.15 16.95H18.25Q18.575 16.95 18.788 16.737Q19 16.525 19 16.2V12.1Q19 11.775 18.788 11.562Q18.575 11.35 18.25 11.35H12.15Q11.825 11.35 11.613 11.562Q11.4 11.775 11.4 12.1V16.2Q11.4 16.525 11.613 16.737Q11.825 16.95 12.15 16.95ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7ZM4.8 18Q4.45 18 4.225 17.775Q4 17.55 4 17.2V6.8Q4 6.45 4.225 6.225Q4.45 6 4.8 6Q4.45 6 4.225 6.225Q4 6.45 4 6.8V17.2Q4 17.55 4.225 17.775Q4.45 18 4.8 18ZM4.8 18H19.2Q19.55 18 19.775 17.775Q20 17.55 20 17.2V6.8Q20 6.45 19.775 6.225Q19.55 6 19.2 6H4.8Q4.45 6 4.225 6.225Q4 6.45 4 6.8V17.2Q4 17.55 4.225 17.775Q4.45 18 4.8 18Z"/>
    </Icon>
  );
});

IconMaterialEventSeatRoundedW100.displayName = 'AmauiIconMaterialEventSeatRoundedW100';

export default IconMaterialEventSeatRoundedW100;
