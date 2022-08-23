import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCommentBankRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentBankRoundedW100Filled'
      short_name='CommentBank'

      {...props}
    >
      <path d="M3.3 17.7V4.8Q3.3 4.15 3.725 3.725Q4.15 3.3 4.8 3.3H19.2Q19.85 3.3 20.275 3.725Q20.7 4.15 20.7 4.8V15.2Q20.7 15.85 20.275 16.275Q19.85 16.7 19.2 16.7H6.1L4.575 18.225Q4.225 18.575 3.763 18.387Q3.3 18.2 3.3 17.7ZM15.5 8.75 16.75 9.5Q16.95 9.625 17.15 9.5Q17.35 9.375 17.35 9.15V4H13.65V9.15Q13.65 9.375 13.85 9.5Q14.05 9.625 14.25 9.5Z"/>
    </Icon>
  );
});

IconMaterialCommentBankRoundedW100Filled.displayName = 'AmauiIconMaterialCommentBankRoundedW100Filled';

export default IconMaterialCommentBankRoundedW100Filled;
