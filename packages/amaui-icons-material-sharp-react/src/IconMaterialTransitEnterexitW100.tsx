import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTransitEnterexitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitEnterexitW100'

      short_name='TransitEnterexit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.95 17.2V8.8h1.4v6l7.7-7.7 1 1-7.7 7.7h6v1.4Z"/>
    </Icon>
  );
});

IconMaterialTransitEnterexitW100.displayName = 'AmauiIconMaterialTransitEnterexitW100';

export default IconMaterialTransitEnterexitW100;
