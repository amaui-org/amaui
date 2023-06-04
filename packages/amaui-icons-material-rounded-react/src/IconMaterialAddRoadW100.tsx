import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddRoadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddRoadW100'

      short_name='AddRoad'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.7 22.65q-.15 0-.25-.1t-.1-.25v-2.65H14.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65V16.3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.65h2.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-2.65v2.65q0 .15-.1.25t-.25.1Zm0-9.7q-.15 0-.25-.1t-.1-.25V5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v7.6q0 .15-.1.25t-.25.1Zm-11.4 6.7q-.15 0-.25-.1t-.1-.25V5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v14.3q0 .15-.1.25t-.25.1Zm5.7-12q-.15 0-.25-.1t-.1-.25V5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.3q0 .15-.1.25t-.25.1Zm0 6q-.15 0-.25-.1t-.1-.25V11q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.3q0 .15-.1.25t-.25.1Zm0 6q-.15 0-.25-.1t-.1-.25V17q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.3q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialAddRoadW100.displayName = 'AmauiIconMaterialAddRoadW100';

export default IconMaterialAddRoadW100;
