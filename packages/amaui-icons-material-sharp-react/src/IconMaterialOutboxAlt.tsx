import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutboxAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboxAlt'

      short_name='OutboxAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m240-240 480-240-480-240v480Zm80-120v-80l120-40-120-40v-80l260 120-260 120ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialOutboxAlt.displayName = 'AmauiIconMaterialOutboxAlt';

export default IconMaterialOutboxAlt;
