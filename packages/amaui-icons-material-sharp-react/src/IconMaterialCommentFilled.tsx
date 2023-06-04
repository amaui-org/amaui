import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCommentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentFilled'

      short_name='Comment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 14h12v-2H6Zm0-3h12V9H6Zm0-3h12V6H6Zm16 14-4-4H2V2h20Z"/>
    </Icon>
  );
});

IconMaterialCommentFilled.displayName = 'AmauiIconMaterialCommentFilled';

export default IconMaterialCommentFilled;
