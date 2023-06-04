import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRecentActorsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecentActorsFilled'

      short_name='RecentActors'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 19V5h14v14Zm16 0V5h2v14Zm4 0V5h2v14ZM3 15.35q1.1-.65 2.35-1T8 14q1.4 0 2.65.35t2.35 1V7H3Zm5-2.1q-1.15 0-1.95-.8t-.8-1.95q0-1.15.8-1.95T8 7.75q1.15 0 1.95.8t.8 1.95q0 1.15-.8 1.95t-1.95.8Z"/>
    </Icon>
  );
});

IconMaterialRecentActorsFilled.displayName = 'AmauiIconMaterialRecentActorsFilled';

export default IconMaterialRecentActorsFilled;
