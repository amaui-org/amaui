import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMapSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MapSharp'
      short_name='Map'

      {...props}
    >
      <path d="M15 21 9 18.9 3 21.225V5.05L9 3L15 5.1L21 2.775V18.95ZM14 18.55V6.85L10 5.45V17.15ZM16 18.55 19 17.55V5.7L16 6.85ZM5 18.3 8 17.15V5.45L5 6.45ZM16 6.85V18.55ZM8 5.45V17.15Z"/>
    </Icon>
  );
});

IconMaterialMapSharp.displayName = 'AmauiIconMaterialMapSharp';

export default IconMaterialMapSharp;
