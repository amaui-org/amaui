import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWineBarSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WineBarSharp'
      short_name='WineBar'

      {...props}
    >
      <path d="M8 21V19H11V14.9Q8.85 14.55 7.425 12.9Q6 11.25 6 9V3H18V9Q18 11.25 16.575 12.9Q15.15 14.55 13 14.9V19H16V21ZM12 13Q13.4 13 14.45 12.15Q15.5 11.3 15.85 10H8.15Q8.5 11.3 9.55 12.15Q10.6 13 12 13ZM8 8H16V5H8ZM12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Z"/>
    </Icon>
  );
});

IconMaterialWineBarSharp.displayName = 'AmauiIconMaterialWineBarSharp';

export default IconMaterialWineBarSharp;
