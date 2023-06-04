import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighlighterSize2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlighterSize2W100'

      short_name='HighlighterSize2'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m300 840-84-84q-5-5-5-10.5t5-10.5l423-423q5-5 10.5-5t10.5 5l84 85q4 4 4 10t-4 10L321 840q-5 5-10.5 5t-10.5-5Z"/>
    </Icon>
  );
});

IconMaterialHighlighterSize2W100.displayName = 'AmauiIconMaterialHighlighterSize2W100';

export default IconMaterialHighlighterSize2W100;
