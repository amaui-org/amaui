import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighlighterSize4W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlighterSize4W100Filled'

      short_name='HighlighterSize4'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M371 911 145 685q-5-5-5-10.5t5-10.5l423-423q4-4 10-4t10 4l227 226q5 5 5 10.5t-5 10.5L392 911q-5 5-10.5 5t-10.5-5Z"/>
    </Icon>
  );
});

IconMaterialHighlighterSize4W100Filled.displayName = 'AmauiIconMaterialHighlighterSize4W100Filled';

export default IconMaterialHighlighterSize4W100Filled;
