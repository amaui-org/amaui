import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalPostOfficeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPostOfficeSharp'
      short_name='LocalPostOffice'

      {...props}
    >
      <path d="M2 22V12H6V8Q6 5.5 7.75 3.75Q9.5 2 12 2H16Q18.5 2 20.25 3.75Q22 5.5 22 8V22H20V19H16V22ZM16 17H20V8Q20 6.35 18.825 5.175Q17.65 4 16 4H12Q10.35 4 9.175 5.175Q8 6.35 8 8V12H16ZM10 10V8H18V10ZM9 16.85 14 14H4ZM9 18.6 4 15.75V20H14V15.75ZM4 14V20V14Z"/>
    </Icon>
  );
});

IconMaterialLocalPostOfficeSharp.displayName = 'AmauiIconMaterialLocalPostOfficeSharp';

export default IconMaterialLocalPostOfficeSharp;
