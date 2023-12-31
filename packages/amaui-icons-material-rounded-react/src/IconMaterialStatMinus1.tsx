import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStatMinus1 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StatMinus1'

      short_name='StatMinus1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-458 156-155q11-11 27.5-11.5T692-613q11 11 11 28t-11 28L537-402q-23 23-57 23t-57-23L268-557q-11-11-11.5-27.5T268-613q11-11 28-11t28 11l156 155Z"/>
    </Icon>
  );
});

IconMaterialStatMinus1.displayName = 'AmauiIconMaterialStatMinus1';

export default IconMaterialStatMinus1;
