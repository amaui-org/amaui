import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWhereToVoteRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WhereToVoteRounded'
      short_name='WhereToVote'

      {...props}
    >
      <path d="M10.95 12.925Q11.15 12.925 11.325 12.862Q11.5 12.8 11.65 12.65L15.2 9.1Q15.475 8.825 15.475 8.4Q15.475 7.975 15.2 7.675Q14.9 7.4 14.475 7.4Q14.05 7.4 13.775 7.675L10.95 10.5L10.25 9.8Q9.975 9.525 9.55 9.525Q9.125 9.525 8.85 9.8Q8.55 10.1 8.55 10.525Q8.55 10.95 8.85 11.225L10.25 12.65Q10.4 12.8 10.575 12.862Q10.75 12.925 10.95 12.925ZM12 19.35Q15.05 16.55 16.525 14.262Q18 11.975 18 10.2Q18 7.475 16.262 5.737Q14.525 4 12 4Q9.475 4 7.737 5.737Q6 7.475 6 10.2Q6 11.975 7.475 14.262Q8.95 16.55 12 19.35ZM12 21.625Q11.8 21.625 11.6 21.55Q11.4 21.475 11.25 21.35Q7.6 18.125 5.8 15.363Q4 12.6 4 10.2Q4 6.45 6.413 4.225Q8.825 2 12 2Q15.175 2 17.587 4.225Q20 6.45 20 10.2Q20 12.6 18.2 15.363Q16.4 18.125 12.75 21.35Q12.6 21.475 12.4 21.55Q12.2 21.625 12 21.625ZM12 10.2Q12 10.2 12 10.2Q12 10.2 12 10.2Q12 10.2 12 10.2Q12 10.2 12 10.2Q12 10.2 12 10.2Q12 10.2 12 10.2Q12 10.2 12 10.2Q12 10.2 12 10.2Z"/>
    </Icon>
  );
});

IconMaterialWhereToVoteRounded.displayName = 'AmauiIconMaterialWhereToVoteRounded';

export default IconMaterialWhereToVoteRounded;
