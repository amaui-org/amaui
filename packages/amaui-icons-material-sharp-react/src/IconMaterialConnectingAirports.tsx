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
      <path d="M15.6 21.4 13 17h-3q-.425 0-.712-.288Q9 16.425 9 16t.288-.713Q9.575 15 10 15h3l2.6-4.4h1.1L15.4 15h2.85l.75-1h1l-.6 2 .6 2h-1l-.75-1H15.4l1.3 4.4Zm-8.3-8L8.6 9H5.75L5 10H4l.6-2L4 6h1l.75 1H8.6L7.3 2.6h1.1L11 7h3q.425 0 .713.287Q15 7.575 15 8t-.287.712Q14.425 9 14 9h-3l-2.6 4.4Z"/>
    </Icon>
  );
});

IconMaterialConnectingAirports.displayName = 'AmauiIconMaterialConnectingAirports';

export default IconMaterialConnectingAirports;
