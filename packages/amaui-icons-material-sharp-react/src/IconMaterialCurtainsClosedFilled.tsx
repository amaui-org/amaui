import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurtainsClosedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurtainsClosedFilled'

      short_name='CurtainsClosed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21v-2h2V3h16v16h2v2Zm9-2h2V5h-2Z"/>
    </Icon>
  );
});

IconMaterialCurtainsClosedFilled.displayName = 'AmauiIconMaterialCurtainsClosedFilled';

export default IconMaterialCurtainsClosedFilled;
