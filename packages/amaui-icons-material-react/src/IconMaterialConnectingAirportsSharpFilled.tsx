import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialConnectingAirportsSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConnectingAirportsSharpFilled'
      short_name='ConnectingAirports'

      {...props}
    >
      <path d="M15.6 21.4 13 17H10Q9.575 17 9.288 16.712Q9 16.425 9 16Q9 15.575 9.288 15.287Q9.575 15 10 15H13L15.6 10.6H16.7L15.4 15H18.25L19 14H20L19.4 16L20 18H19L18.25 17H15.4L16.7 21.4ZM7.3 13.4 8.6 9H5.75L5 10H4L4.6 8L4 6H5L5.75 7H8.6L7.3 2.6H8.4L11 7H14Q14.425 7 14.713 7.287Q15 7.575 15 8Q15 8.425 14.713 8.712Q14.425 9 14 9H11L8.4 13.4Z"/>
    </Icon>
  );
});

IconMaterialConnectingAirportsSharpFilled.displayName = 'AmauiIconMaterialConnectingAirportsSharpFilled';

export default IconMaterialConnectingAirportsSharpFilled;
