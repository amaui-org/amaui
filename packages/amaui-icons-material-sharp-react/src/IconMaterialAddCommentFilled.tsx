import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddCommentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCommentFilled'

      short_name='AddComment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3Zm-9 8V2h20v16H6Z"/>
    </Icon>
  );
});

IconMaterialAddCommentFilled.displayName = 'AmauiIconMaterialAddCommentFilled';

export default IconMaterialAddCommentFilled;
