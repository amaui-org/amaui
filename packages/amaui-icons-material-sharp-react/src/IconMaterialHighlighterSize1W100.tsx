import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighlighterSize1W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlighterSize1W100'

      short_name='HighlighterSize1'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m286 826-56-56q-5-5-5-10.5t5-10.5l423-423q5-5 10.5-5t10.5 5l56 56q5 5 5 10.5t-5 10.5L306 826q-4 4-10 4t-10-4Z"/>
    </Icon>
  );
});

IconMaterialHighlighterSize1W100.displayName = 'AmauiIconMaterialHighlighterSize1W100';

export default IconMaterialHighlighterSize1W100;
