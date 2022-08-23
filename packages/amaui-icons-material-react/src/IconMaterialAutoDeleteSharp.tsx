import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoDeleteSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoDeleteSharp'
      short_name='AutoDelete'

      {...props}
    >
      <path d="M7 6V10Q7 10 7 12.037Q7 14.075 7 17Q7 17.525 7 18.025Q7 18.525 7 19ZM11.25 21H5V6H4V4H9V3H15V4H20V6H19V10.3Q18.575 10.175 18.012 10.087Q17.45 10 17 10V6H7V19H10.3Q10.45 19.525 10.7 20.038Q10.95 20.55 11.25 21ZM9 17H10Q10 15.425 10.5 14.412Q11 13.4 11 13.4V8H9ZM13 11.25Q13.425 10.975 13.963 10.7Q14.5 10.425 15 10.3V8H13ZM17 22Q14.925 22 13.463 20.538Q12 19.075 12 17Q12 14.925 13.463 13.462Q14.925 12 17 12Q19.075 12 20.538 13.462Q22 14.925 22 17Q22 19.075 20.538 20.538Q19.075 22 17 22ZM18.65 19.35 19.35 18.65 17.5 16.8V14H16.5V17.2Z"/>
    </Icon>
  );
});

IconMaterialAutoDeleteSharp.displayName = 'AmauiIconMaterialAutoDeleteSharp';

export default IconMaterialAutoDeleteSharp;
