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
      <path d="M3.8 14.125V4q0-.3.2-.5t.5-.2h11.6q.3 0 .5.2t.2.5v7.6q0 .3-.2.5t-.5.2H6.6l-2.125 2.125q-.2.2-.437.087-.238-.112-.238-.387ZM7.3 15.7q-.3 0-.5-.2t-.2-.5v-.7h11.375l.825.825V6h.7q.3 0 .5.2t.2.5v10.825q0 .275-.237.388-.238.112-.438-.088L17.4 15.7Z"/>
    </Icon>
  );
});

IconMaterialForumW100Filled.displayName = 'AmauiIconMaterialForumW100Filled';

export default IconMaterialForumW100Filled;
