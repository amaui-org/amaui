import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScoreSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScoreSharp'
      short_name='Score'

      {...props}
    >
      <path d="M3 21V3H21V21ZM9 12.5 13 16.5 19 10.5V5H5V16.5ZM12 12V6H13.5V12ZM15.5 12 13.5 9 15.5 6H17.2L15.2 9L17.2 12ZM7 12V8.25H9.5V7.5H7V6H11V9.75H8.5V10.5H11V12ZM9 15 5 19H19V13L13 19ZM5 19V5Z"/>
    </Icon>
  );
});

IconMaterialScoreSharp.displayName = 'AmauiIconMaterialScoreSharp';

export default IconMaterialScoreSharp;
