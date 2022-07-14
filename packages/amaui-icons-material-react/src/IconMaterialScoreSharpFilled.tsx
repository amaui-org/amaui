import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScoreSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScoreSharpFilled'
      short_name='Score'

      {...props}
    >
      <path d="M3 21V3H21V21ZM12 12H13.5V6H12ZM15.5 12H17.2L15.2 9L17.2 6H15.5L13.5 9ZM7 12H11V10.5H8.5V9.75H11V6H7V7.5H9.5V8.25H7ZM13 19 19 13V10.5L13 16.5L9 12.5L5 16.5V19L9 15Z"/>
    </Icon>
  );
});

export default IconMaterialScoreSharpFilled;
