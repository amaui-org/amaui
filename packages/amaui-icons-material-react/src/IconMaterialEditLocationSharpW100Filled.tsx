import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditLocationSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditLocationSharpW100Filled'
      short_name='EditLocation'

      {...props}
    >
      <path d="M9 13H9.5L13.4 9.1L12.9 8.6L9 12.5ZM14.125 8.375 14.85 7.65 14.35 7.15 13.625 7.875ZM12 21.5Q8.275 18.15 6.463 15.287Q4.65 12.425 4.65 10.2Q4.65 6.75 6.875 4.7Q9.1 2.65 12 2.65Q14.9 2.65 17.125 4.7Q19.35 6.75 19.35 10.2Q19.35 12.425 17.538 15.287Q15.725 18.15 12 21.5Z"/>
    </Icon>
  );
});

IconMaterialEditLocationSharpW100Filled.displayName = 'AmauiIconMaterialEditLocationSharpW100Filled';

export default IconMaterialEditLocationSharpW100Filled;
