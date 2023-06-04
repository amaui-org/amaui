import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForumW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForumW100Filled'

      short_name='Forum'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.8 15.1V3.3h13v9H6.6Zm2.8.6v-1.4h11.375l.825.825V6h1.4v12.5l-2.8-2.8Z"/>
    </Icon>
  );
});

IconMaterialForumW100Filled.displayName = 'AmauiIconMaterialForumW100Filled';

export default IconMaterialForumW100Filled;
