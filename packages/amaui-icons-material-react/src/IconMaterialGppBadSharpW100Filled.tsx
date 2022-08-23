import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGppBadSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GppBadSharpW100Filled'
      short_name='GppBad'

      {...props}
    >
      <path d="M9.9 14.5 12 12.4 14.1 14.5 14.6 14 12.5 11.9 14.6 9.8 14.1 9.3 12 11.4 9.9 9.3 9.4 9.8 11.5 11.9 9.4 14ZM12 20.65Q9.125 19.75 7.213 17.1Q5.3 14.45 5.3 11.1V5.9L12 3.4L18.7 5.9V11.1Q18.7 14.45 16.788 17.1Q14.875 19.75 12 20.65Z"/>
    </Icon>
  );
});

IconMaterialGppBadSharpW100Filled.displayName = 'AmauiIconMaterialGppBadSharpW100Filled';

export default IconMaterialGppBadSharpW100Filled;
