import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMailOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailOffW100Filled'

      short_name='MailOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M815-105 708-212H192q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h20l28 28h-40l-71-71q-4-4-4.5-9.5T129-811q5-5 10-5t10 5l686 686q4 4 4.5 9.5T835-105q-5 5-10 5t-10-5Zm-6-184q-8 3-16.5 2t-15.5-8L544-528l244-162q6-4 6.5-9t-2.5-10q-3-5-8-6.5t-11 2.5L524-548 375-697q-7-7-8-15.5t2-16.5q3-8 10-13.5t17-5.5h372q26 0 43 17t17 43v372q0 10-5.5 17T809-289Z"/>
    </Icon>
  );
});

IconMaterialMailOffW100Filled.displayName = 'AmauiIconMaterialMailOffW100Filled';

export default IconMaterialMailOffW100Filled;
