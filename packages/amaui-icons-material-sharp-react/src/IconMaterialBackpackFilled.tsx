import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackpackFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackpackFilled'

      short_name='Backpack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V8q0-1.4.85-2.45Q5.7 4.5 7 4.15V2h3v2h4V2h3v2.15q1.3.35 2.15 1.4Q20 6.6 20 8v14Zm10.5-6h2v-4h-9v2h7Z"/>
    </Icon>
  );
});

IconMaterialBackpackFilled.displayName = 'AmauiIconMaterialBackpackFilled';

export default IconMaterialBackpackFilled;
