import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCommentBankSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentBankSharpFilled'
      short_name='CommentBank'

      {...props}
    >
      <path d="M2 22V2H22V18H6ZM12.5 11 15 9.5 17.5 11V4H12.5Z"/>
    </Icon>
  );
});

export default IconMaterialCommentBankSharpFilled;
