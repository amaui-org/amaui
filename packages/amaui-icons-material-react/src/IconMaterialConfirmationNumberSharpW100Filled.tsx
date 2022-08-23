import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialConfirmationNumberSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConfirmationNumberSharpW100Filled'
      short_name='ConfirmationNumber'

      {...props}
    >
      <path d="M3.3 18.7V15.05Q4.2 14.625 4.75 13.812Q5.3 13 5.3 12Q5.3 11 4.75 10.188Q4.2 9.375 3.3 8.95V5.3H20.7V8.95Q19.8 9.375 19.25 10.188Q18.7 11 18.7 12Q18.7 13 19.25 13.812Q19.8 14.625 20.7 15.05V18.7ZM11.65 16.1H12.35V15.4H11.65ZM11.65 12.35H12.35V11.65H11.65ZM11.65 8.6H12.35V7.9H11.65Z"/>
    </Icon>
  );
});

IconMaterialConfirmationNumberSharpW100Filled.displayName = 'AmauiIconMaterialConfirmationNumberSharpW100Filled';

export default IconMaterialConfirmationNumberSharpW100Filled;
