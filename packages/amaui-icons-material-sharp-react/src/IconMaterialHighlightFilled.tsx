import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighlightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlightFilled'

      short_name='Highlight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 8 3.5 5.9l1.4-1.45L7.05 6.6ZM11 5V2h2v3Zm7.4 3-1.45-1.4 2.15-2.1 1.4 1.4ZM9 22v-5l-3-3V9h12v5l-3 3v5Z"/>
    </Icon>
  );
});

IconMaterialHighlightFilled.displayName = 'AmauiIconMaterialHighlightFilled';

export default IconMaterialHighlightFilled;
