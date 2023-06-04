import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddCardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCardFilled'

      short_name='AddCard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 12h16V8H4Zm15 10v-3h-3v-2h3v-3h2v3h3v2h-3v3ZM2 20V4h20v8h-3q-2.075 0-3.537 1.462Q14 14.925 14 17v3Z"/>
    </Icon>
  );
});

IconMaterialAddCardFilled.displayName = 'AmauiIconMaterialAddCardFilled';

export default IconMaterialAddCardFilled;
