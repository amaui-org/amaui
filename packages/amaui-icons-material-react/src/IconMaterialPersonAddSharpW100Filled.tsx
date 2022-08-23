import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonAddSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonAddSharpW100Filled'
      short_name='PersonAdd'

      {...props}
    >
      <path d="M18.325 13.35V10.35H15.325V9.65H18.325V6.65H19.025V9.65H22.025V10.35H19.025V13.35ZM8.675 11.2Q7.55 11.2 6.763 10.412Q5.975 9.625 5.975 8.5Q5.975 7.375 6.763 6.588Q7.55 5.8 8.675 5.8Q9.8 5.8 10.588 6.588Q11.375 7.375 11.375 8.5Q11.375 9.625 10.588 10.412Q9.8 11.2 8.675 11.2ZM1.975 18.2V16.9Q1.975 16.35 2.312 15.863Q2.65 15.375 3.225 15.1Q4.6 14.45 5.963 14.125Q7.325 13.8 8.675 13.8Q10.025 13.8 11.387 14.125Q12.75 14.45 14.125 15.1Q14.7 15.375 15.038 15.863Q15.375 16.35 15.375 16.9V18.2Z"/>
    </Icon>
  );
});

IconMaterialPersonAddSharpW100Filled.displayName = 'AmauiIconMaterialPersonAddSharpW100Filled';

export default IconMaterialPersonAddSharpW100Filled;
