import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChurchSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChurchSharp'
      short_name='Church'

      {...props}
    >
      <path d="M2 22V14L6 12.225V9L11 6.5V5H9V3H11V1H13V3H15V5H13V6.5L18 9V12.225L22 14V22H13V17H11V22ZM4 20H9V14.9H15V20H20V15.2L16 13.4V10.05L12 8L8 10.05V13.4L4 15.2ZM12 13.5Q12.625 13.5 13.062 13.062Q13.5 12.625 13.5 12Q13.5 11.375 13.062 10.938Q12.625 10.5 12 10.5Q11.375 10.5 10.938 10.938Q10.5 11.375 10.5 12Q10.5 12.625 10.938 13.062Q11.375 13.5 12 13.5ZM12 14Z"/>
    </Icon>
  );
});

IconMaterialChurchSharp.displayName = 'AmauiIconMaterialChurchSharp';

export default IconMaterialChurchSharp;
