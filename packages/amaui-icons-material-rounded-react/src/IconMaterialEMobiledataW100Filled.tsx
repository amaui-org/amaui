import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEMobiledataW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EMobiledataW100Filled'

      short_name='EMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.4 17q-.325 0-.537-.212-.213-.213-.213-.538v-8.5q0-.325.213-.537Q9.075 7 9.4 7H15q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H9.35v3.95H15q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H9.35v3.95H15q.15 0 .25.1t.1.25q0 .15-.1.25T15 17Z"/>
    </Icon>
  );
});

IconMaterialEMobiledataW100Filled.displayName = 'AmauiIconMaterialEMobiledataW100Filled';

export default IconMaterialEMobiledataW100Filled;
