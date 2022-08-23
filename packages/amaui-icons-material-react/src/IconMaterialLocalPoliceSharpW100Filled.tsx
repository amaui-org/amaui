import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalPoliceSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPoliceSharpW100Filled'
      short_name='LocalPolice'

      {...props}
    >
      <path d="M10.15 14.3 12 12.85 13.8 14.25 13.1 12 15.05 10.5H12.75L12 8.2L11.25 10.5H8.95L10.85 12ZM12 20.65Q9.125 19.75 7.213 17.1Q5.3 14.45 5.3 11.1V5.9L12 3.4L18.7 5.9V11.1Q18.7 14.45 16.788 17.1Q14.875 19.75 12 20.65Z"/>
    </Icon>
  );
});

IconMaterialLocalPoliceSharpW100Filled.displayName = 'AmauiIconMaterialLocalPoliceSharpW100Filled';

export default IconMaterialLocalPoliceSharpW100Filled;
