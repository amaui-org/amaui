import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCommentBankW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentBankW100Filled'

      short_name='CommentBank'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 19.5V3.3h17.4v13.4H6.1Zm10.35-9.65 1.85-1.1 1.85 1.1V4h-3.7Z"/>
    </Icon>
  );
});

IconMaterialCommentBankW100Filled.displayName = 'AmauiIconMaterialCommentBankW100Filled';

export default IconMaterialCommentBankW100Filled;
