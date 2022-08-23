import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPendingActionsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PendingActionsSharp'
      short_name='PendingActions'

      {...props}
    >
      <path d="M17 22Q14.925 22 13.463 20.538Q12 19.075 12 17Q12 14.925 13.463 13.462Q14.925 12 17 12Q19.075 12 20.538 13.462Q22 14.925 22 17Q22 19.075 20.538 20.538Q19.075 22 17 22ZM18.675 19.375 19.375 18.675 17.5 16.8V14H16.5V17.2ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H9.175Q9.5 2.125 10.262 1.562Q11.025 1 12 1Q12.975 1 13.738 1.562Q14.5 2.125 14.825 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V11.25Q20.55 10.925 20.05 10.7Q19.55 10.475 19 10.3V5Q19 5 19 5Q19 5 19 5H17V8H7V5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19H10.3Q10.475 19.55 10.7 20.05Q10.925 20.55 11.25 21ZM12 5Q12.425 5 12.713 4.712Q13 4.425 13 4Q13 3.575 12.713 3.287Q12.425 3 12 3Q11.575 3 11.288 3.287Q11 3.575 11 4Q11 4.425 11.288 4.712Q11.575 5 12 5Z"/>
    </Icon>
  );
});

IconMaterialPendingActionsSharp.displayName = 'AmauiIconMaterialPendingActionsSharp';

export default IconMaterialPendingActionsSharp;
