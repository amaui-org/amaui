import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHowToVoteRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HowToVoteRounded'
      short_name='HowToVote'

      {...props}
    >
      <path d="M5.175 16H18.825L16.875 13.8L18.3 12.375L21 15.45V20Q21 20.825 20.413 21.413Q19.825 22 19 22H5Q4.175 22 3.587 21.413Q3 20.825 3 20V15.45L5.75 12.325L7.175 13.75ZM18.45 9.4 13.45 14.4Q12.875 14.975 12.038 14.962Q11.2 14.95 10.625 14.375L7.1 10.85Q6.525 10.275 6.538 9.438Q6.55 8.6 7.125 8.025L12.025 3.125Q12.6 2.55 13.45 2.525Q14.3 2.5 14.875 3.075L18.4 6.6Q18.975 7.175 19 8Q19.025 8.825 18.45 9.4ZM17 8.025Q17 8.025 17 8.025Q17 8.025 17 8.025L13.475 4.5Q13.475 4.5 13.475 4.5Q13.475 4.5 13.475 4.5L8.525 9.45Q8.525 9.45 8.525 9.45Q8.525 9.45 8.525 9.45L12.05 12.975Q12.05 12.975 12.05 12.975Q12.05 12.975 12.05 12.975ZM5 20H19Q19 20 19 20Q19 20 19 20V18H5V20Q5 20 5 20Q5 20 5 20ZM5 20Q5 20 5 20Q5 20 5 20V18V20Q5 20 5 20Q5 20 5 20Z"/>
    </Icon>
  );
});

IconMaterialHowToVoteRounded.displayName = 'AmauiIconMaterialHowToVoteRounded';

export default IconMaterialHowToVoteRounded;
