import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVillaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VillaW100'

      short_name='Villa'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V8.9L15 4.775V13.3h1.9q0-.575.412-.988.413-.412.988-.412t.988.412q.412.413.412.988v6.4ZM5 19h5.3v-5.7h4V5.775L5 9.375Zm6 0h3.3v-2.1h1.4V19H19v-5h-8Zm-1.4-6.4ZM15 19Zm0-.7Z"/>
    </Icon>
  );
});

IconMaterialVillaW100.displayName = 'AmauiIconMaterialVillaW100';

export default IconMaterialVillaW100;
