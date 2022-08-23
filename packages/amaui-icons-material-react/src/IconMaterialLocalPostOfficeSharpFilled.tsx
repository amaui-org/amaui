import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalPostOfficeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPostOfficeSharpFilled'
      short_name='LocalPostOffice'

      {...props}
    >
      <path d="M2 22V12H6V8Q6 5.5 7.75 3.75Q9.5 2 12 2H16Q18.5 2 20.25 3.75Q22 5.5 22 8V22H20V19H16V22ZM16 17H20V8Q20 6.35 18.825 5.175Q17.65 4 16 4H12Q10.35 4 9.175 5.175Q8 6.35 8 8V12H16ZM10 10V8H18V10ZM9 18.6 14 15.75V14L9 16.85L4 14V15.75Z"/>
    </Icon>
  );
});

IconMaterialLocalPostOfficeSharpFilled.displayName = 'AmauiIconMaterialLocalPostOfficeSharpFilled';

export default IconMaterialLocalPostOfficeSharpFilled;
