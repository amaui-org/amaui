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
      <path d="M10.3 19.7v-6.4h6.6q0-.575.412-.988.413-.412.988-.412t.988.412q.412.413.412.988v6.4h-4v-2.8h-1.4v2.8Zm-6 0V8.9L15 4.775V12.6H9.6v7.1Z"/>
    </Icon>
  );
});

IconMaterialVillaW100Filled.displayName = 'AmauiIconMaterialVillaW100Filled';

export default IconMaterialVillaW100Filled;
