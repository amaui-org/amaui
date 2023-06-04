import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurtainsClosed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurtainsClosed'

      short_name='CurtainsClosed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21v-2h2V3h16v16h2v2Zm4-2h3V5H6Zm5 0h2V5h-2Zm4 0h3V5h-3Zm-9 0V5v14Zm12 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialCurtainsClosed.displayName = 'AmauiIconMaterialCurtainsClosed';

export default IconMaterialCurtainsClosed;
