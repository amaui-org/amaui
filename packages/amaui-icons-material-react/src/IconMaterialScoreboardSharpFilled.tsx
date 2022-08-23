import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScoreboardSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScoreboardSharpFilled'
      short_name='Scoreboard'

      {...props}
    >
      <path d="M14.5 15H19V9H14.5ZM16 13.5V10.5H17.5V13.5ZM5 15H9.5V13.5H6.5V12.5H9.5V9H5V10.5H8V11.5H5ZM11.25 11H12.75V9.5H11.25ZM11.25 14.5H12.75V13H11.25ZM2 20V4H7V2H9V4H15V2H17V4H22V20ZM11.25 18H12.75V16.5H11.25ZM11.25 7.5H12.75V6H11.25Z"/>
    </Icon>
  );
});

IconMaterialScoreboardSharpFilled.displayName = 'AmauiIconMaterialScoreboardSharpFilled';

export default IconMaterialScoreboardSharpFilled;
