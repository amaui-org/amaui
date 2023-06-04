import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForumW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForumW100'

      short_name='Forum'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.8 15.1V3.3h13v9H6.6Zm2.8.6v-1.4h11.375l.825.825V6h1.4v12.5l-2.8-2.8ZM16.1 4H4.5v9.4l1.8-1.8h9.8ZM4.5 4v9.4Z"/>
    </Icon>
  );
});

IconMaterialForumW100.displayName = 'AmauiIconMaterialForumW100';

export default IconMaterialForumW100;
