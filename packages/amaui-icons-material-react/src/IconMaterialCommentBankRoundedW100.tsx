import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCommentBankRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentBankRoundedW100'
      short_name='CommentBank'

      {...props}
    >
      <path d="M4 17.8 5.8 16H19.2Q19.55 16 19.775 15.775Q20 15.55 20 15.2V4.8Q20 4.45 19.775 4.225Q19.55 4 19.2 4H17.35V9.15Q17.35 9.375 17.15 9.5Q16.95 9.625 16.75 9.5L15.5 8.75L14.25 9.5Q14.05 9.625 13.85 9.5Q13.65 9.375 13.65 9.15V4H4.8Q4.45 4 4.225 4.225Q4 4.45 4 4.8ZM3.3 17.7V4.8Q3.3 4.15 3.725 3.725Q4.15 3.3 4.8 3.3H19.2Q19.85 3.3 20.275 3.725Q20.7 4.15 20.7 4.8V15.2Q20.7 15.85 20.275 16.275Q19.85 16.7 19.2 16.7H6.1L4.575 18.225Q4.225 18.575 3.763 18.387Q3.3 18.2 3.3 17.7ZM4 16Q4 16 4 15.775Q4 15.55 4 15.2V4.8Q4 4.45 4 4.225Q4 4 4 4Q4 4 4 4.225Q4 4.45 4 4.8Z"/>
    </Icon>
  );
});

IconMaterialCommentBankRoundedW100.displayName = 'AmauiIconMaterialCommentBankRoundedW100';

export default IconMaterialCommentBankRoundedW100;
