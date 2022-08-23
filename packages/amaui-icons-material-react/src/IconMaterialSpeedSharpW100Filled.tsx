import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpeedSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeedSharpW100Filled'
      short_name='Speed'

      {...props}
    >
      <path d="M10.85 15.1Q11.25 15.5 11.913 15.462Q12.575 15.425 12.9 15L18.05 8L11 13.1Q10.55 13.4 10.488 14.037Q10.425 14.675 10.85 15.1ZM5.1 18.7Q4.9 18.7 4.738 18.587Q4.575 18.475 4.45 18.3Q3.875 17.325 3.588 16.225Q3.3 15.125 3.3 14Q3.3 12.2 3.987 10.612Q4.675 9.025 5.85 7.85Q7.025 6.675 8.613 5.988Q10.2 5.3 12 5.3Q13.8 5.3 15.375 5.975Q16.95 6.65 18.138 7.812Q19.325 8.975 20.013 10.537Q20.7 12.1 20.7 13.9Q20.7 15.1 20.413 16.225Q20.125 17.35 19.55 18.4Q19.45 18.575 19.275 18.637Q19.1 18.7 18.9 18.7Z"/>
    </Icon>
  );
});

IconMaterialSpeedSharpW100Filled.displayName = 'AmauiIconMaterialSpeedSharpW100Filled';

export default IconMaterialSpeedSharpW100Filled;
