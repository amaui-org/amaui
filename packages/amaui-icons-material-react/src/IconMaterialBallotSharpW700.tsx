import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBallotSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BallotSharpW700'
      short_name='Ballot'

      {...props}
    >
      <path d="M12 10H17V8H12ZM12 16H17V14H12ZM7 11H11V7H7ZM7 17H11V13H7ZM2.15 21.85V2.15H21.85V21.85ZM5.3 18.7H18.7V5.3H5.3ZM5.3 18.7V5.3V18.7Z"/>
    </Icon>
  )
});

export default IconMaterialBallotSharpW700;
