import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditRoadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditRoadW100Filled'

      short_name='EditRoad'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.35 14.05V5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v8.35ZM6.3 19.65q-.15 0-.25-.1t-.1-.25V5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v14.3q0 .15-.1.25t-.25.1Zm5.7-12q-.15 0-.25-.1t-.1-.25V5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.3q0 .15-.1.25t-.25.1Zm0 6q-.15 0-.25-.1t-.1-.25V11q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.3q0 .15-.1.25t-.25.1Zm0 6q-.15 0-.25-.1t-.1-.25V17q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.3q0 .15-.1.25t-.25.1Zm9.275-5.7.5-.5q.125-.125.175-.25.05-.125-.075-.25l-.1-.1q-.125-.125-.25-.075t-.25.175l-.5.5Zm-5.9 5.7q-.125 0-.212-.088-.088-.087-.088-.212 0-.1.15-.35l4.85-4.85.5.5-4.85 4.85q-.05.05-.35.15Z"/>
    </Icon>
  );
});

IconMaterialEditRoadW100Filled.displayName = 'AmauiIconMaterialEditRoadW100Filled';

export default IconMaterialEditRoadW100Filled;
