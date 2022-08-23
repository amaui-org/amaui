import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBallotSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BallotSharpW100Filled'
      short_name='Ballot'

      {...props}
    >
      <path d="M12 10H16.5V9.3H12ZM12 14.7H16.5V14H12ZM8 10.65H10V8.65H8ZM8 15.35H10V13.35H8ZM4.3 19.7V4.3H19.7V19.7Z"/>
    </Icon>
  );
});

IconMaterialBallotSharpW100Filled.displayName = 'AmauiIconMaterialBallotSharpW100Filled';

export default IconMaterialBallotSharpW100Filled;
