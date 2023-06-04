import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVillaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VillaW100Filled'

      short_name='Villa'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.05 19.7q-.325 0-.537-.213-.213-.212-.213-.537V9.425q0-.225.125-.425.125-.2.35-.275l9.2-3.55q.375-.15.7.075.325.225.325.625V12.6h-4.65q-.325 0-.538.212-.212.213-.212.538v6.35Zm5.95 0q-.3 0-.5-.2t-.2-.5v-4.95q0-.325.213-.538.212-.212.537-.212h5.85q0-.575.412-.988.413-.412.988-.412t.988.412q.412.413.412.988v5.65q0 .325-.212.537-.213.213-.538.213H15.7v-2.1q0-.275-.212-.488-.213-.212-.488-.212-.3 0-.5.212-.2.213-.2.488v2.1Z"/>
    </Icon>
  );
});

IconMaterialVillaW100Filled.displayName = 'AmauiIconMaterialVillaW100Filled';

export default IconMaterialVillaW100Filled;
