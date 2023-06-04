import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeleteSweepW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteSweepW100Filled'

      short_name='DeleteSweep'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.2 17.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-8q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h5q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM5.95 17.7q-.65 0-1.075-.425-.425-.425-.425-1.075V8H3.8q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.3v-.35q0-.15.1-.25t.25-.1h1.4q.15 0 .25.1t.1.25v.35h3.3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-.65v8.2q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialDeleteSweepW100Filled.displayName = 'AmauiIconMaterialDeleteSweepW100Filled';

export default IconMaterialDeleteSweepW100Filled;
