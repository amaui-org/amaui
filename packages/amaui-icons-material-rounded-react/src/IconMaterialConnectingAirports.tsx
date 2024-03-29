import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConnectingAirports = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConnectingAirports'

      short_name='ConnectingAirports'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.925 21.4q-.125 0-.275-.088-.15-.087-.225-.212L13 17h-3q-.425 0-.712-.288Q9 16.425 9 16t.288-.713Q9.575 15 10 15h3l2.425-4.1q.075-.125.225-.212.15-.088.3-.088.325 0 .475.212.15.213.05.513L15.4 15h2.85l.575-.775q.075-.1.213-.163.137-.062.262-.062.3 0 .438.2.137.2.062.475L19.4 16l.4 1.325q.075.275-.075.475-.15.2-.45.2-.125 0-.25-.062-.125-.063-.2-.163L18.25 17H15.4l1.075 3.675q.1.3-.062.513-.163.212-.488.212Zm-7.875-8q-.325 0-.475-.212-.15-.213-.05-.513L8.6 9H5.75l-.575.775q-.075.1-.212.163Q4.825 10 4.7 10q-.3 0-.437-.2-.138-.2-.063-.475L4.6 8l-.4-1.325q-.075-.275.075-.475.15-.2.45-.2.125 0 .25.062.125.063.2.163L5.75 7H8.6L7.525 3.325q-.1-.3.063-.513.162-.212.487-.212.125 0 .275.087.15.088.225.213L11 7h3q.425 0 .713.287Q15 7.575 15 8t-.287.712Q14.425 9 14 9h-3l-2.425 4.1q-.075.125-.225.212-.15.088-.3.088Z"/>
    </Icon>
  );
});

IconMaterialConnectingAirports.displayName = 'AmauiIconMaterialConnectingAirports';

export default IconMaterialConnectingAirports;
