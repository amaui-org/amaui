import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTurnSlightLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnSlightLeftW100'

      short_name='TurnSlightLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.65 19.35v-7.225l-6.3-6.3v3.2h-.7V4.65h4.375v.7h-3.2l6.525 6.525v7.475Z"/>
    </Icon>
  );
});

IconMaterialTurnSlightLeftW100.displayName = 'AmauiIconMaterialTurnSlightLeftW100';

export default IconMaterialTurnSlightLeftW100;
