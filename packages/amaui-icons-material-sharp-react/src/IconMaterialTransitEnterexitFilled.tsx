import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTransitEnterexitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitEnterexitFilled'

      short_name='TransitEnterexit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 18V8h3v4.75l6.8-6.8 2.2 2.2L11.15 15H16v3Z"/>
    </Icon>
  );
});

IconMaterialTransitEnterexitFilled.displayName = 'AmauiIconMaterialTransitEnterexitFilled';

export default IconMaterialTransitEnterexitFilled;
