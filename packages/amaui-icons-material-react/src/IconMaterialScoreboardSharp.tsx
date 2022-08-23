import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScoreboardSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScoreboardSharp'
      short_name='Scoreboard'

      {...props}
    >
      <path d="M14.5 15V9H19V15ZM16 13.5H17.5V10.5H16ZM5 15V11.5H8V10.5H5V9H9.5V12.5H6.5V13.5H9.5V15ZM11.25 11V9.5H12.75V11ZM11.25 14.5V13H12.75V14.5ZM2 20V4H7V2H9V4H15V2H17V4H22V20ZM4 18H11.25V16.5H12.75V18H20V6H12.75V7.5H11.25V6H4ZM4 18V6Z"/>
    </Icon>
  );
});

IconMaterialScoreboardSharp.displayName = 'AmauiIconMaterialScoreboardSharp';

export default IconMaterialScoreboardSharp;
