import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBloodtypeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BloodtypeSharp'
      short_name='Bloodtype'

      {...props}
    >
      <path d="M9 18H15V16H9ZM11 15H13V13H15V11H13V9H11V11H9V13H11ZM12 22Q8.825 22 6.413 19.788Q4 17.575 4 13.8Q4 11.3 5.988 8.363Q7.975 5.425 12 2Q16.025 5.425 18.013 8.363Q20 11.3 20 13.8Q20 17.575 17.587 19.788Q15.175 22 12 22ZM12 20Q14.525 20 16.262 18.275Q18 16.55 18 13.8Q18 12.025 16.525 9.737Q15.05 7.45 12 4.65Q8.95 7.45 7.475 9.737Q6 12.025 6 13.8Q6 16.55 7.737 18.275Q9.475 20 12 20ZM12 13.8Q12 13.8 12 13.8Q12 13.8 12 13.8Q12 13.8 12 13.8Q12 13.8 12 13.8Q12 13.8 12 13.8Q12 13.8 12 13.8Q12 13.8 12 13.8Q12 13.8 12 13.8Z"/>
    </Icon>
  );
});

IconMaterialBloodtypeSharp.displayName = 'AmauiIconMaterialBloodtypeSharp';

export default IconMaterialBloodtypeSharp;
