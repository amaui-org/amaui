import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBallotSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BallotSharpFilled'
      short_name='Ballot'

      {...props}
    >
      <path d="M12 10H17V8H12ZM12 16H17V14H12ZM7 11H11V7H7ZM7 17H11V13H7ZM3 21V3H21V21Z"/>
    </Icon>
  );
});

export default IconMaterialBallotSharpFilled;
