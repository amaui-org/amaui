import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHangoutVideoOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HangoutVideoOffW100'

      short_name='HangoutVideoOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M442-608h72q13 0 21.5 8.5T544-578v72L442-608Zm102 102 91-73q11-9 24-2.5t13 20.5v183L544-506Zm271 272q6-8 9.5-17.5T828-272v-416q0-26-17-43t-43-17H302l28 28h438q14 0 23 9t9 23v415q0 6-1.5 10.5T795-255l20 21ZM188-748l28 28h-24q-14 0-23 9t-9 23v416q0 14 9 23t23 9h464L544-352H318q-13 0-21.5-8.5T288-382v-226L104-792q-4-4-4.5-9.5T104-812q5-5 10-5t10 5l698 698q4 4 4.5 9.5T822-94q-5 5-10 5t-10-5L684-212H192q-26 0-43-17t-17-43v-416q0-25 16-41.5t40-18.5Zm375 261Zm-145 9Z"/>
    </Icon>
  );
});

IconMaterialHangoutVideoOffW100.displayName = 'AmauiIconMaterialHangoutVideoOffW100';

export default IconMaterialHangoutVideoOffW100;
