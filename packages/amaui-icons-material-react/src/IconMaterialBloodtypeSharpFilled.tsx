import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBloodtypeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BloodtypeSharpFilled'
      short_name='Bloodtype'

      {...props}
    >
      <path d="M9 18H15V16H9ZM11 15H13V13H15V11H13V9H11V11H9V13H11ZM12 22Q8.825 22 6.413 19.788Q4 17.575 4 13.8Q4 11.3 5.988 8.363Q7.975 5.425 12 2Q16.025 5.425 18.013 8.363Q20 11.3 20 13.8Q20 17.575 17.587 19.788Q15.175 22 12 22Z"/>
    </Icon>
  );
});

export default IconMaterialBloodtypeSharpFilled;
