import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCommentBankRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentBankRounded'
      short_name='CommentBank'

      {...props}
    >
      <path d="M4 16H20Q20 16 20 16Q20 16 20 16V4Q20 4 20 4Q20 4 20 4H17.5V10.125Q17.5 10.425 17.25 10.562Q17 10.7 16.75 10.55L15 9.5L13.25 10.55Q13 10.7 12.75 10.562Q12.5 10.425 12.5 10.125V4H4Q4 4 4 4Q4 4 4 4ZM2 19.575V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18H6L3.7 20.3Q3.225 20.775 2.612 20.512Q2 20.25 2 19.575ZM4 16Q4 16 4 16Q4 16 4 16V4Q4 4 4 4Q4 4 4 4Q4 4 4 4Q4 4 4 4Z"/>
    </Icon>
  );
});

IconMaterialCommentBankRounded.displayName = 'AmauiIconMaterialCommentBankRounded';

export default IconMaterialCommentBankRounded;
