import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTransitEnterexitSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitEnterexitSharp'
      short_name='TransitEnterexit'

      {...props}
    >
      <path d="M6 18V8H9V12.75L15.8 5.95L18 8.15L11.15 15H16V18Z"/>
    </Icon>
  );
});

IconMaterialTransitEnterexitSharp.displayName = 'AmauiIconMaterialTransitEnterexitSharp';

export default IconMaterialTransitEnterexitSharp;
