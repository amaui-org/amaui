import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayDisabledSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayDisabledSharp'
      short_name='PlayDisabled'

      {...props}
    >
      <path d="M16.45 13.6 15.05 12.15 14.1 11.25 8 5.15V5L19 12ZM19.75 22.6 13 15.8 8 19V10.8L1.4 4.2L2.8 2.8L21.2 21.2ZM10 12.8ZM10 15.35 11.55 14.35 10 12.8ZM14.1 11.25Z"/>
    </Icon>
  );
});

IconMaterialPlayDisabledSharp.displayName = 'AmauiIconMaterialPlayDisabledSharp';

export default IconMaterialPlayDisabledSharp;
