import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBuildSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BuildSharpFilled'
      short_name='Build'

      {...props}
    >
      <path d="M17.875 21.425 11.1 14.6Q10.6 14.8 10.088 14.9Q9.575 15 9 15Q6.5 15 4.75 13.25Q3 11.5 3 9Q3 8.1 3.25 7.287Q3.5 6.475 3.95 5.75L7.6 9.4L9.4 7.6L5.75 3.95Q6.475 3.5 7.287 3.25Q8.1 3 9 3Q11.5 3 13.25 4.75Q15 6.5 15 9Q15 9.575 14.9 10.087Q14.8 10.6 14.6 11.1L21.425 17.875Z"/>
    </Icon>
  );
});

IconMaterialBuildSharpFilled.displayName = 'AmauiIconMaterialBuildSharpFilled';

export default IconMaterialBuildSharpFilled;
