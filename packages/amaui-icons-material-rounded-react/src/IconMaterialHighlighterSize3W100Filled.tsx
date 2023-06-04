import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighlighterSize3W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlighterSize3W100Filled'

      short_name='HighlighterSize3'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M328 868 187 727q-4-4-4-10t4-10l423-424q5-5 11-5t10 5l141 142q4 4 4 10t-4 10L349 868q-5 5-10.5 5t-10.5-5Z"/>
    </Icon>
  );
});

IconMaterialHighlighterSize3W100Filled.displayName = 'AmauiIconMaterialHighlighterSize3W100Filled';

export default IconMaterialHighlighterSize3W100Filled;
