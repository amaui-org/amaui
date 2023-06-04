import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighlighterSize1Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlighterSize1Filled'

      short_name='HighlighterSize1'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m268 844-56-56q-12-12-12-28.5t12-28.5l423-423q12-12 28.5-12t28.5 12l56 56q12 12 12 28.5T748 421L324 844q-11 11-28 11t-28-11Z"/>
    </Icon>
  );
});

IconMaterialHighlighterSize1Filled.displayName = 'AmauiIconMaterialHighlighterSize1Filled';

export default IconMaterialHighlighterSize1Filled;
