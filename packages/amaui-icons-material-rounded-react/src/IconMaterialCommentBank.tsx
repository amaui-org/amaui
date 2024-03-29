import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCommentBank = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentBank'

      short_name='CommentBank'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 16h16V4h-2.5v6.125q0 .3-.25.437-.25.138-.5-.012L15 9.5l-1.75 1.05q-.25.15-.5.012-.25-.137-.25-.437V4H4Zm-2 3.575V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18H6l-2.3 2.3q-.475.475-1.088.212Q2 20.25 2 19.575ZM4 16V4Z"/>
    </Icon>
  );
});

IconMaterialCommentBank.displayName = 'AmauiIconMaterialCommentBank';

export default IconMaterialCommentBank;
