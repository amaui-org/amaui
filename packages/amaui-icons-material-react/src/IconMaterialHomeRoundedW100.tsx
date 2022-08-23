import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeRoundedW100'
      short_name='Home'

      {...props}
    >
      <path d="M6 19H9.9V13.15H14.1V19H18V10L12 5.45L6 10ZM6 19.7Q5.725 19.7 5.513 19.487Q5.3 19.275 5.3 19V10Q5.3 9.825 5.375 9.688Q5.45 9.55 5.575 9.45L11.575 4.9Q11.675 4.825 11.775 4.8Q11.875 4.775 12 4.775Q12.125 4.775 12.225 4.8Q12.325 4.825 12.425 4.9L18.425 9.45Q18.55 9.55 18.625 9.688Q18.7 9.825 18.7 10V19Q18.7 19.275 18.488 19.487Q18.275 19.7 18 19.7H13.4V13.85H10.6V19.7ZM12 12.225Z"/>
    </Icon>
  );
});

IconMaterialHomeRoundedW100.displayName = 'AmauiIconMaterialHomeRoundedW100';

export default IconMaterialHomeRoundedW100;
