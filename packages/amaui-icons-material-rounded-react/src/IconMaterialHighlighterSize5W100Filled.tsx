import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighlighterSize5W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlighterSize5W100Filled'

      short_name='HighlighterSize5'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M428 968 88 628q-4-4-4-10t4-10l424-424q4-4 10-3.5t10 4.5l340 339q4 4 4 10t-4 10L448 968q-4 4-10 4t-10-4Z"/>
    </Icon>
  );
});

IconMaterialHighlighterSize5W100Filled.displayName = 'AmauiIconMaterialHighlighterSize5W100Filled';

export default IconMaterialHighlighterSize5W100Filled;
