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
      <path d="M3.3 17.7V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425H6.1l-1.525 1.525q-.35.35-.812.162Q3.3 18.2 3.3 17.7Zm12.2-8.95 1.25.75q.2.125.4 0t.2-.35V4h-3.7v5.15q0 .225.2.35.2.125.4 0Z"/>
    </Icon>
  );
});

IconMaterialCommentBankW100Filled.displayName = 'AmauiIconMaterialCommentBankW100Filled';

export default IconMaterialCommentBankW100Filled;
