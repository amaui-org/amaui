import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRecentActors = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecentActors'

      short_name='RecentActors'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 19V5h14v14Zm7-2Zm-5-1.65q1.1-.65 2.35-1T8 14q1.4 0 2.65.35t2.35 1V7H3ZM17 19V5h2v14Zm4 0V5h2v14ZM8 13.25q-1.125 0-1.938-.812-.812-.813-.812-1.938t.812-1.938Q6.875 7.75 8 7.75t1.938.812q.812.813.812 1.938t-.812 1.938q-.813.812-1.938.812Zm0-2.75ZM4.15 17h7.7q-.875-.5-1.85-.75Q9.025 16 8 16t-2 .25q-.975.25-1.85.75ZM8 11.4q.375 0 .637-.263.263-.262.263-.637t-.263-.637Q8.375 9.6 8 9.6t-.637.263q-.263.262-.263.637t.263.637q.262.263.637.263Z"/>
    </Icon>
  );
});

IconMaterialRecentActors.displayName = 'AmauiIconMaterialRecentActors';

export default IconMaterialRecentActors;
