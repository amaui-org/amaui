import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWifi2BarOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wifi2BarOutlined'
      short_name='Wifi2Bar'

      {...props}
    >
      <path d="M6.35 15.35 4.25 13.2Q5.725 11.725 7.713 10.863Q9.7 10 12 10Q14.3 10 16.288 10.875Q18.275 11.75 19.75 13.25L17.65 15.35Q16.55 14.25 15.1 13.625Q13.65 13 12 13Q10.35 13 8.9 13.625Q7.45 14.25 6.35 15.35ZM12 21 15.525 17.45Q14.85 16.775 13.95 16.387Q13.05 16 12 16Q10.95 16 10.05 16.387Q9.15 16.775 8.475 17.45Z"/>
    </Icon>
  )
});

export default IconMaterialWifi2BarOutlined;
