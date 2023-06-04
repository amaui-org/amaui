import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighlight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Highlight'

      short_name='Highlight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 8 3.5 5.9l1.4-1.45L7.05 6.6ZM11 5V2h2v3Zm7.4 3-1.45-1.4 2.15-2.1 1.4 1.4ZM9 22v-5l-3-3V9h12v5l-3 3v5Zm2-2h2v-3.825l3-3V11H8v2.175l3 3Zm1-4.5Z"/>
    </Icon>
  );
});

IconMaterialHighlight.displayName = 'AmauiIconMaterialHighlight';

export default IconMaterialHighlight;
