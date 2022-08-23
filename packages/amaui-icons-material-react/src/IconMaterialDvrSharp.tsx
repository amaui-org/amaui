import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDvrSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DvrSharp'
      short_name='Dvr'

      {...props}
    >
      <path d="M9 10H18V8H9ZM9 14H18V12H9ZM7 10Q7.425 10 7.713 9.712Q8 9.425 8 9Q8 8.575 7.713 8.287Q7.425 8 7 8Q6.575 8 6.287 8.287Q6 8.575 6 9Q6 9.425 6.287 9.712Q6.575 10 7 10ZM7 14Q7.425 14 7.713 13.712Q8 13.425 8 13Q8 12.575 7.713 12.287Q7.425 12 7 12Q6.575 12 6.287 12.287Q6 12.575 6 13Q6 13.425 6.287 13.712Q6.575 14 7 14ZM8 21V19H2V3H22V19H16V21ZM4 17H20V5H4ZM4 17V5V17Z"/>
    </Icon>
  );
});

IconMaterialDvrSharp.displayName = 'AmauiIconMaterialDvrSharp';

export default IconMaterialDvrSharp;
