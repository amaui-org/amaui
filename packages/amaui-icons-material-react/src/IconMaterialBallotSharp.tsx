import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBallotSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BallotSharp'
      short_name='Ballot'

      {...props}
    >
      <path d="M12 10H17V8H12ZM12 16H17V14H12ZM7 11H11V7H7ZM7 17H11V13H7ZM3 21V3H21V21ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

export default IconMaterialBallotSharp;
