import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCommentBankRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentBankRoundedFilled'
      short_name='CommentBank'

      {...props}
    >
      <path d="M2 19.575V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18H6L3.7 20.3Q3.225 20.775 2.612 20.512Q2 20.25 2 19.575ZM15 9.5 16.75 10.55Q17 10.7 17.25 10.55Q17.5 10.4 17.5 10.125V4H12.5V10.125Q12.5 10.4 12.75 10.55Q13 10.7 13.25 10.55Z"/>
    </Icon>
  );
});

IconMaterialCommentBankRoundedFilled.displayName = 'AmauiIconMaterialCommentBankRoundedFilled';

export default IconMaterialCommentBankRoundedFilled;
