import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTransitEnterexitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitEnterexitW100Filled'

      short_name='TransitEnterexit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.1 17.2q-.475 0-.813-.338-.337-.337-.337-.812V9.5q0-.275.212-.488.213-.212.488-.212t.487.212q.213.213.213.488v5.3l7.225-7.225q.2-.2.487-.188.288.013.488.213.2.2.2.5t-.2.5l-7.2 7.2h5.3q.275 0 .488.212.212.213.212.488t-.212.487q-.213.213-.488.213Z"/>
    </Icon>
  );
});

IconMaterialTransitEnterexitW100Filled.displayName = 'AmauiIconMaterialTransitEnterexitW100Filled';

export default IconMaterialTransitEnterexitW100Filled;
