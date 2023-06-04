import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForumFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForumFilled'

      short_name='Forum'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 17V2h15v11H6Zm4 1v-3h13V6h3v16l-4-4Z"/>
    </Icon>
  );
});

IconMaterialForumFilled.displayName = 'AmauiIconMaterialForumFilled';

export default IconMaterialForumFilled;
