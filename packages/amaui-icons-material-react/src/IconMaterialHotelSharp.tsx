import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHotelSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelSharp'
      short_name='Hotel'

      {...props}
    >
      <path d="M1 20V5H3V15H11V7H23V20H21V17H3V20ZM7 14Q5.75 14 4.875 13.125Q4 12.25 4 11Q4 9.75 4.875 8.875Q5.75 8 7 8Q8.25 8 9.125 8.875Q10 9.75 10 11Q10 12.25 9.125 13.125Q8.25 14 7 14ZM13 15H21V9H13ZM7 12Q7.425 12 7.713 11.712Q8 11.425 8 11Q8 10.575 7.713 10.287Q7.425 10 7 10Q6.575 10 6.287 10.287Q6 10.575 6 11Q6 11.425 6.287 11.712Q6.575 12 7 12ZM7 11Q7 11 7 11Q7 11 7 11Q7 11 7 11Q7 11 7 11Q7 11 7 11Q7 11 7 11Q7 11 7 11Q7 11 7 11ZM13 15V9V15Z"/>
    </Icon>
  );
});

IconMaterialHotelSharp.displayName = 'AmauiIconMaterialHotelSharp';

export default IconMaterialHotelSharp;
