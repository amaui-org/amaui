import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReplyAll = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplyAll'

      short_name='ReplyAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8 17-6-6 6-6 1.425 1.4-4.6 4.6 4.6 4.6Zm12 2v-4q0-1.25-.875-2.125T17 12h-6.175l3.6 3.6L13 17l-6-6 6-6 1.425 1.4-3.6 3.6H17q2.075 0 3.538 1.462Q22 12.925 22 15v4Z"/>
    </Icon>
  );
});

IconMaterialReplyAll.displayName = 'AmauiIconMaterialReplyAll';

export default IconMaterialReplyAll;
