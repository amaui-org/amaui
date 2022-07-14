import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCommentBankSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentBankSharp'
      short_name='CommentBank'

      {...props}
    >
      <path d="M12.5 11V4H4V17.175L5.175 16H20V4H17.5V11L15 9.5ZM2 22V2H22V18H6ZM4 4V17.175V16Z"/>
    </Icon>
  );
});

export default IconMaterialCommentBankSharp;
