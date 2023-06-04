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
      <path d="M12.5 11V4H4v13.175L5.175 16H20V4h-2.5v7L15 9.5ZM2 22V2h20v16H6ZM4 4v13.175V16Z"/>
    </Icon>
  );
});

IconMaterialCommentBank.displayName = 'AmauiIconMaterialCommentBank';

export default IconMaterialCommentBank;
