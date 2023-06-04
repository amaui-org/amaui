import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighlighterSize3 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlighterSize3'

      short_name='HighlighterSize3'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M310 886 169 745q-11-11-11-28t11-28l423-424q12-12 29-12t28 12l141 142q11 11 11 28t-11 28L367 886q-12 12-28.5 12T310 886Z"/>
    </Icon>
  );
});

IconMaterialHighlighterSize3.displayName = 'AmauiIconMaterialHighlighterSize3';

export default IconMaterialHighlighterSize3;
