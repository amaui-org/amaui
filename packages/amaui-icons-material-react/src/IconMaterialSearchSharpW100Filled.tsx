import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSearchSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SearchSharpW100Filled'
      short_name='Search'

      {...props}
    >
      <path d="M19.45 19.9 13.2 13.65Q12.45 14.3 11.475 14.65Q10.5 15 9.55 15Q7.25 15 5.65 13.4Q4.05 11.8 4.05 9.5Q4.05 7.2 5.65 5.6Q7.25 4 9.55 4Q11.85 4 13.45 5.6Q15.05 7.2 15.05 9.5Q15.05 10.525 14.675 11.5Q14.3 12.475 13.7 13.15L19.95 19.4ZM9.55 14.3Q11.575 14.3 12.963 12.912Q14.35 11.525 14.35 9.5Q14.35 7.475 12.963 6.087Q11.575 4.7 9.55 4.7Q7.525 4.7 6.138 6.087Q4.75 7.475 4.75 9.5Q4.75 11.525 6.138 12.912Q7.525 14.3 9.55 14.3Z"/>
    </Icon>
  );
});

IconMaterialSearchSharpW100Filled.displayName = 'AmauiIconMaterialSearchSharpW100Filled';

export default IconMaterialSearchSharpW100Filled;
