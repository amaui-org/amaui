import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHotelSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelSharpW100Filled'
      short_name='Hotel'

      {...props}
    >
      <path d="M2.3 18.7V6.3H3V15H11.65V8.3H21.7V18.7H21V15.7H3V18.7ZM7 12.85Q6.225 12.85 5.688 12.312Q5.15 11.775 5.15 11Q5.15 10.225 5.688 9.688Q6.225 9.15 7 9.15Q7.775 9.15 8.312 9.688Q8.85 10.225 8.85 11Q8.85 11.775 8.312 12.312Q7.775 12.85 7 12.85Z"/>
    </Icon>
  );
});

IconMaterialHotelSharpW100Filled.displayName = 'AmauiIconMaterialHotelSharpW100Filled';

export default IconMaterialHotelSharpW100Filled;
