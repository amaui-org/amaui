import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRMobiledataRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RMobiledataRounded'
      short_name='RMobiledata'

      {...props}
    >
      <path d="M6.775 9.475 5.85 7.35H4V9Q4 9.425 3.713 9.712Q3.425 10 3 10Q2.575 10 2.288 9.712Q2 9.425 2 9V3Q2 2.575 2.288 2.287Q2.575 2 3 2H7Q7.825 2 8.412 2.587Q9 3.175 9 4V5.35Q9 5.95 8.65 6.438Q8.3 6.925 7.8 7.2L8.45 8.7Q8.675 9.225 8.425 9.613Q8.175 10 7.575 10Q7.325 10 7.1 9.85Q6.875 9.7 6.775 9.475ZM4 5.35H7Q7 5.35 7 5.35Q7 5.35 7 5.35V4Q7 4 7 4Q7 4 7 4H4Z"/>
    </Icon>
  );
});

IconMaterialRMobiledataRounded.displayName = 'AmauiIconMaterialRMobiledataRounded';

export default IconMaterialRMobiledataRounded;
