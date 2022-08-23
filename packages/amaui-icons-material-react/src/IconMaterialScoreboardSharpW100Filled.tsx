import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScoreboardSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScoreboardSharpW100Filled'
      short_name='Scoreboard'

      {...props}
    >
      <path d="M14.35 14.6H18.05V9.4H14.35ZM15.05 13.9V10.1H17.35V13.9ZM5.95 14.6H9.65V13.9H6.65V12.35H9.65V9.4H5.95V10.1H8.95V11.65H5.95ZM11.65 10.825H12.35V10.125H11.65ZM11.65 14.025H12.35V13.325H11.65ZM3.25 18.425V5.725H7.65V3.725H8.35V5.725H15.65V3.725H16.35V5.725H20.75V18.425ZM11.65 17.725H12.35V16.525H11.65ZM11.65 7.625H12.35V6.425H11.65Z"/>
    </Icon>
  );
});

IconMaterialScoreboardSharpW100Filled.displayName = 'AmauiIconMaterialScoreboardSharpW100Filled';

export default IconMaterialScoreboardSharpW100Filled;
