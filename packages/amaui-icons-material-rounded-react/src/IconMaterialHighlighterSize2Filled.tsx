import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighlighterSize2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlighterSize2Filled'

      short_name='HighlighterSize2'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m282 858-84-84q-12-12-12-28.5t12-28.5l423-423q12-12 28.5-12t28.5 12l84 85q11 11 11 28t-11 28L339 858q-12 12-28.5 12T282 858Z"/>
    </Icon>
  );
});

IconMaterialHighlighterSize2Filled.displayName = 'AmauiIconMaterialHighlighterSize2Filled';

export default IconMaterialHighlighterSize2Filled;
