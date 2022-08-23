import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHowToVoteRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HowToVoteRoundedFilled'
      short_name='HowToVote'

      {...props}
    >
      <path d="M5.175 16H18.825L16.875 13.8L18.3 12.375L21 15.45V20Q21 20.825 20.413 21.413Q19.825 22 19 22H5Q4.175 22 3.587 21.413Q3 20.825 3 20V15.45L5.75 12.325L7.175 13.75ZM18.425 9.425 13.425 14.425Q12.85 15 12.013 14.988Q11.175 14.975 10.6 14.4L7.125 10.875Q6.55 10.3 6.55 9.45Q6.55 8.6 7.125 8.025L12.025 3.125Q12.6 2.55 13.45 2.55Q14.3 2.55 14.875 3.125L18.4 6.6Q18.975 7.175 18.988 8.012Q19 8.85 18.425 9.425ZM17 8Q17 8 17 8Q17 8 17 8L13.45 4.5Q13.45 4.5 13.45 4.5Q13.45 4.5 13.45 4.5L8.5 9.45Q8.5 9.45 8.5 9.45Q8.5 9.45 8.5 9.45L12.05 12.95Q12.05 12.95 12.05 12.95Q12.05 12.95 12.05 12.95Z"/>
    </Icon>
  );
});

IconMaterialHowToVoteRoundedFilled.displayName = 'AmauiIconMaterialHowToVoteRoundedFilled';

export default IconMaterialHowToVoteRoundedFilled;
