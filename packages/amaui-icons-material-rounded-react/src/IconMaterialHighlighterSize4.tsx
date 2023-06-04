import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighlighterSize4 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlighterSize4'

      short_name='HighlighterSize4'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M353 929 127 703q-12-12-12-28.5t12-28.5l423-423q12-12 28.5-12t27.5 12l227 226q12 12 12 28.5T833 506L410 929q-12 12-28.5 12T353 929Z"/>
    </Icon>
  );
});

IconMaterialHighlighterSize4.displayName = 'AmauiIconMaterialHighlighterSize4';

export default IconMaterialHighlighterSize4;
