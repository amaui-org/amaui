import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCommentBankFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentBankFilled'

      short_name='CommentBank'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22V2h20v16H6Zm10.5-11L15 9.5l2.5 1.5V4h-5Z"/>
    </Icon>
  );
});

IconMaterialCommentBankFilled.displayName = 'AmauiIconMaterialCommentBankFilled';

export default IconMaterialCommentBankFilled;
