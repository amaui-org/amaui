import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWhereToVoteSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WhereToVoteSharpFilled'
      short_name='WhereToVote'

      {...props}
    >
      <path d="M12 22Q11.65 22 11.4 21.8Q11.15 21.6 11.025 21.275Q10.55 19.875 9.838 18.65Q9.125 17.425 7.85 15.775Q6.575 14.125 5.787 12.625Q5 11.125 5 9Q5 6.075 7.038 4.037Q9.075 2 12 2Q14.925 2 16.962 4.037Q19 6.075 19 9Q19 11.275 18.138 12.787Q17.275 14.3 16.15 15.775Q14.8 17.575 14.113 18.762Q13.425 19.95 12.975 21.275Q12.85 21.625 12.588 21.812Q12.325 22 12 22ZM10.95 12.5 15.9 7.55 14.475 6.125 10.95 9.65 9.55 8.25 8.125 9.675Z"/>
    </Icon>
  );
});

IconMaterialWhereToVoteSharpFilled.displayName = 'AmauiIconMaterialWhereToVoteSharpFilled';

export default IconMaterialWhereToVoteSharpFilled;
