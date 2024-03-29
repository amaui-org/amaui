import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSms = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Sms'

      short_name='Sms'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 11q.425 0 .713-.288Q9 10.425 9 10t-.287-.713Q8.425 9 8 9t-.713.287Q7 9.575 7 10t.287.712Q7.575 11 8 11Zm4 0q.425 0 .713-.288Q13 10.425 13 10t-.287-.713Q12.425 9 12 9t-.712.287Q11 9.575 11 10t.288.712Q11.575 11 12 11Zm4 0q.425 0 .712-.288Q17 10.425 17 10t-.288-.713Q16.425 9 16 9t-.712.287Q15 9.575 15 10t.288.712Q15.575 11 16 11ZM2 19.575V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18H6l-2.3 2.3q-.475.475-1.088.212Q2 20.25 2 19.575Zm2-2.4L5.175 16H20V4H4ZM4 4v13.175Z"/>
    </Icon>
  );
});

IconMaterialSms.displayName = 'AmauiIconMaterialSms';

export default IconMaterialSms;
