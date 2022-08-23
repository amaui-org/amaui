import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayDisabledSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayDisabledSharpFilled'
      short_name='PlayDisabled'

      {...props}
    >
      <path d="M16.45 13.6 8 5.15V5L19 12ZM19.75 22.6 13 15.8 8 19V10.8L1.4 4.2L2.8 2.8L21.2 21.2Z"/>
    </Icon>
  );
});

IconMaterialPlayDisabledSharpFilled.displayName = 'AmauiIconMaterialPlayDisabledSharpFilled';

export default IconMaterialPlayDisabledSharpFilled;
