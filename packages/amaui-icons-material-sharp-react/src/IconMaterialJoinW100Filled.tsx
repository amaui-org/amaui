import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialJoinW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JoinW100Filled'

      short_name='Join'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 17.7q2.375 0 4.038-1.662Q21.7 14.375 21.7 12t-1.662-4.037Q18.375 6.3 16 6.3q-1 0-1.887.313-.888.312-1.613.887.875 1.025 1.387 2.162Q14.4 10.8 14.4 12q0 1.2-.513 2.337-.512 1.138-1.387 2.163.725.575 1.613.887Q15 17.7 16 17.7Zm-4-1.65q.8-.775 1.25-1.812.45-1.038.45-2.238t-.45-2.238Q12.8 8.725 12 7.95q-.8.775-1.25 1.812Q10.3 10.8 10.3 12t.45 2.238q.45 1.037 1.25 1.812ZM8 17.7q.975 0 1.863-.3.887-.3 1.612-.875Q10.6 15.65 10.1 14.5T9.6 12q0-1.2.513-2.338.512-1.137 1.387-2.162-.725-.575-1.613-.887Q9 6.3 8 6.3q-2.375 0-4.037 1.663Q2.3 9.625 2.3 12t1.663 4.038Q5.625 17.7 8 17.7Z"/>
    </Icon>
  );
});

IconMaterialJoinW100Filled.displayName = 'AmauiIconMaterialJoinW100Filled';

export default IconMaterialJoinW100Filled;
