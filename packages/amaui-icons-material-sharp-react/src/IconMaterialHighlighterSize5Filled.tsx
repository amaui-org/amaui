import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighlighterSize5Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlighterSize5Filled'

      short_name='HighlighterSize5'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M410 986 70 646q-11-11-11-28t11-28l424-424q11-11 27.5-11t28.5 12l340 339q11 11 11 28t-11 28L466 986q-11 11-28 11t-28-11Z"/>
    </Icon>
  );
});

IconMaterialHighlighterSize5Filled.displayName = 'AmauiIconMaterialHighlighterSize5Filled';

export default IconMaterialHighlighterSize5Filled;
