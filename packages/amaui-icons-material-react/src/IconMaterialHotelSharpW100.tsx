import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHotelSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelSharpW100'
      short_name='Hotel'

      {...props}
    >
      <path d="M2.3 18.7V6.3H3V15H11.65V8.3H21.7V18.7H21V15.7H3V18.7ZM7 12.85Q6.225 12.85 5.688 12.312Q5.15 11.775 5.15 11Q5.15 10.225 5.688 9.688Q6.225 9.15 7 9.15Q7.775 9.15 8.312 9.688Q8.85 10.225 8.85 11Q8.85 11.775 8.312 12.312Q7.775 12.85 7 12.85ZM12.35 15H21V9H12.35ZM7 12.15Q7.475 12.15 7.812 11.812Q8.15 11.475 8.15 11Q8.15 10.525 7.812 10.188Q7.475 9.85 7 9.85Q6.525 9.85 6.188 10.188Q5.85 10.525 5.85 11Q5.85 11.475 6.188 11.812Q6.525 12.15 7 12.15ZM7 11Q7 11 7 11Q7 11 7 11Q7 11 7 11Q7 11 7 11Q7 11 7 11Q7 11 7 11Q7 11 7 11Q7 11 7 11ZM12.35 15V9V15Z"/>
    </Icon>
  );
});

IconMaterialHotelSharpW100.displayName = 'AmauiIconMaterialHotelSharpW100';

export default IconMaterialHotelSharpW100;
