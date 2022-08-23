import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChurchSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChurchSharpFilled'
      short_name='Church'

      {...props}
    >
      <path d="M2 22V14L6 12.225V9L11 6.5V5H9V3H11V1H13V3H15V5H13V6.5L18 9V12.225L22 14V22H14V17H10V22ZM12 13.5Q12.625 13.5 13.062 13.062Q13.5 12.625 13.5 12Q13.5 11.375 13.062 10.938Q12.625 10.5 12 10.5Q11.375 10.5 10.938 10.938Q10.5 11.375 10.5 12Q10.5 12.625 10.938 13.062Q11.375 13.5 12 13.5Z"/>
    </Icon>
  );
});

IconMaterialChurchSharpFilled.displayName = 'AmauiIconMaterialChurchSharpFilled';

export default IconMaterialChurchSharpFilled;
