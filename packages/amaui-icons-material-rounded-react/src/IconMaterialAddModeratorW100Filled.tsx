import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddModeratorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddModeratorW100Filled'

      short_name='AddModerator'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 20.7q-1.55 0-2.625-1.075T13.3 17q0-1.55 1.075-2.625T17 13.3q1.55 0 2.625 1.075T20.7 17q0 1.55-1.075 2.625T17 20.7Zm0-.85q.15 0 .25-.1t.1-.25v-2.15h2.15q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-2.15V14.5q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.15H14.5q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h2.15v2.15q0 .15.1.25t.25.1Zm-5 .725h-.188q-.087 0-.187-.05-2.725-1-4.525-3.587Q5.3 14.35 5.3 11.1V6.95q0-.475.275-.863.275-.387.7-.562l5.2-1.925q.275-.1.525-.1t.525.1l5.2 1.925q.425.175.7.562.275.388.275.863v4.6q-.5-.125-.85-.188-.35-.062-.85-.062-2.375 0-4.037 1.662Q11.3 14.625 11.3 17q0 .95.3 1.837.3.888.875 1.638-.125.05-.237.075-.113.025-.238.025Z"/>
    </Icon>
  );
});

IconMaterialAddModeratorW100Filled.displayName = 'AmauiIconMaterialAddModeratorW100Filled';

export default IconMaterialAddModeratorW100Filled;
