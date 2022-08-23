import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHowToVoteSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HowToVoteSharpFilled'
      short_name='HowToVote'

      {...props}
    >
      <path d="M5.175 16H18.825L16.875 13.8L18.3 12.375L21 15.45V22H3V15.45L5.75 12.325L7.175 13.75ZM12.025 15.825 5.7 9.45 13.45 1.7 19.825 8.025ZM12.05 12.95 17 8 13.45 4.5 8.5 9.45Z"/>
    </Icon>
  );
});

IconMaterialHowToVoteSharpFilled.displayName = 'AmauiIconMaterialHowToVoteSharpFilled';

export default IconMaterialHowToVoteSharpFilled;
