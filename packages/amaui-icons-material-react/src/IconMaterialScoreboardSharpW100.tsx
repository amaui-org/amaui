import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScoreboardSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScoreboardSharpW100'
      short_name='Scoreboard'

      {...props}
    >
      <path d="M14.35 14.6V9.4H18.05V14.6ZM15.05 13.9H17.35V10.1H15.05ZM5.95 14.6V11.65H8.95V10.1H5.95V9.4H9.65V12.35H6.65V13.9H9.65V14.6ZM11.65 10.825V10.125H12.35V10.825ZM11.65 14.025V13.325H12.35V14.025ZM3.25 18.425V5.725H7.65V3.725H8.35V5.725H15.65V3.725H16.35V5.725H20.75V18.425ZM3.95 17.725H11.65V16.525H12.35V17.725H20.05V6.425H12.35V7.625H11.65V6.425H3.95ZM3.95 17.725V6.425Z"/>
    </Icon>
  );
});

IconMaterialScoreboardSharpW100.displayName = 'AmauiIconMaterialScoreboardSharpW100';

export default IconMaterialScoreboardSharpW100;
