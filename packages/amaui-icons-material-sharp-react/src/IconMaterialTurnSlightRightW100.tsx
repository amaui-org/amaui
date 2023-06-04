import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTurnSlightRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnSlightRightW100'

      short_name='TurnSlightRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.65 19.35v-7.475l6.525-6.525h-3.2v-.7h4.375v4.375h-.7v-3.2l-6.3 6.3v7.225Z"/>
    </Icon>
  );
});

IconMaterialTurnSlightRightW100.displayName = 'AmauiIconMaterialTurnSlightRightW100';

export default IconMaterialTurnSlightRightW100;
