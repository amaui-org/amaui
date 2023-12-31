import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutboxAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboxAltFilled'

      short_name='OutboxAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m240-240 480-240-480-240v174l200 66-200 66v174Zm-40 120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/>
    </Icon>
  );
});

IconMaterialOutboxAltFilled.displayName = 'AmauiIconMaterialOutboxAltFilled';

export default IconMaterialOutboxAltFilled;
