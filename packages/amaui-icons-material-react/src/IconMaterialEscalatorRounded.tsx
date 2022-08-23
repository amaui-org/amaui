import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEscalatorRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EscalatorRounded'
      short_name='Escalator'

      {...props}
    >
      <path d="M7 18H10.3L15.3 9H17Q17.625 9 18.062 8.562Q18.5 8.125 18.5 7.5Q18.5 6.875 18.062 6.438Q17.625 6 17 6H13.7L8.7 15H7Q6.375 15 5.938 15.438Q5.5 15.875 5.5 16.5Q5.5 17.125 5.938 17.562Q6.375 18 7 18ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Z"/>
    </Icon>
  );
});

IconMaterialEscalatorRounded.displayName = 'AmauiIconMaterialEscalatorRounded';

export default IconMaterialEscalatorRounded;
