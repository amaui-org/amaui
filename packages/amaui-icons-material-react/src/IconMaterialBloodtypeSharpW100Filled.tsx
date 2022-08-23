import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBloodtypeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BloodtypeSharpW100Filled'
      short_name='Bloodtype'

      {...props}
    >
      <path d="M9.65 17.35H14.35V16.65H9.65ZM11.65 14.35H12.35V12.35H14.35V11.65H12.35V9.65H11.65V11.65H9.65V12.35H11.65ZM12 20.7Q9.35 20.7 7.325 18.837Q5.3 16.975 5.3 13.8Q5.3 11.725 6.975 9.225Q8.65 6.725 12 3.7Q15.35 6.725 17.025 9.225Q18.7 11.725 18.7 13.8Q18.7 16.975 16.675 18.837Q14.65 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialBloodtypeSharpW100Filled.displayName = 'AmauiIconMaterialBloodtypeSharpW100Filled';

export default IconMaterialBloodtypeSharpW100Filled;
