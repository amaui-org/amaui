import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWifi2BarSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wifi2BarSharpW100'
      short_name='Wifi2Bar'

      {...props}
    >
      <path d="M6.35 15.35 5.65 14.65Q6.9 13.4 8.512 12.7Q10.125 12 12 12Q13.875 12 15.488 12.7Q17.1 13.4 18.35 14.65L17.65 15.35Q16.55 14.25 15.1 13.625Q13.65 13 12 13Q10.35 13 8.9 13.625Q7.45 14.25 6.35 15.35ZM12 21 14.125 18.875Q13.7 18.45 13.163 18.225Q12.625 18 12 18Q11.375 18 10.838 18.225Q10.3 18.45 9.875 18.875Z"/>
    </Icon>
  );
});

IconMaterialWifi2BarSharpW100.displayName = 'AmauiIconMaterialWifi2BarSharpW100';

export default IconMaterialWifi2BarSharpW100;
