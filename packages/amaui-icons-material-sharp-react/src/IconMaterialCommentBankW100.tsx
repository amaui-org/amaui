import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCommentBankW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentBankW100'

      short_name='CommentBank'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.65 9.85V4H4v13.8L5.8 16H20V4h-2.65v5.85l-1.85-1.1ZM3.3 19.5V3.3h17.4v13.4H6.1ZM4 4v13.8V16Z"/>
    </Icon>
  );
});

IconMaterialCommentBankW100.displayName = 'AmauiIconMaterialCommentBankW100';

export default IconMaterialCommentBankW100;
