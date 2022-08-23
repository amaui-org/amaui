import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHowToVoteSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HowToVoteSharp'
      short_name='HowToVote'

      {...props}
    >
      <path d="M5.175 16H18.825L16.875 13.8L18.3 12.375L21 15.45V22H3V15.45L5.75 12.325L7.175 13.75ZM12.05 15.8 5.7 9.45 13.475 1.675 19.825 8.025ZM12.05 12.975 17 8.025 13.475 4.5 8.525 9.45ZM5 20H19V18H5ZM5 20V18V20Z"/>
    </Icon>
  );
});

IconMaterialHowToVoteSharp.displayName = 'AmauiIconMaterialHowToVoteSharp';

export default IconMaterialHowToVoteSharp;
