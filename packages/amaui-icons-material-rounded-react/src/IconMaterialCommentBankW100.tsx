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
      <path d="M4 17.8 5.8 16h13.4q.35 0 .575-.225Q20 15.55 20 15.2V4.8q0-.35-.225-.575Q19.55 4 19.2 4h-1.85v5.15q0 .225-.2.35-.2.125-.4 0l-1.25-.75-1.25.75q-.2.125-.4 0t-.2-.35V4H4.8q-.35 0-.575.225Q4 4.45 4 4.8Zm-.7-.1V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425H6.1l-1.525 1.525q-.35.35-.812.162Q3.3 18.2 3.3 17.7ZM4 16V4 4.8Z"/>
    </Icon>
  );
});

IconMaterialCommentBankW100.displayName = 'AmauiIconMaterialCommentBankW100';

export default IconMaterialCommentBankW100;
