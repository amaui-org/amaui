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
      <path d="M5.05 19.7q-.325 0-.537-.213-.213-.212-.213-.537V9.425q0-.225.125-.425.125-.2.35-.275l9.2-3.55q.375-.15.7.075.325.225.325.625V13.3h1.9q0-.575.412-.988.413-.412.988-.412t.988.412q.412.413.412.988v5.65q0 .325-.212.537-.213.213-.538.213ZM5 19h5.3v-4.95q0-.325.213-.538.212-.212.537-.212h3.25V5.775L5 9.375Zm6 0h3.3v-1.4q0-.275.2-.488.2-.212.5-.212.275 0 .488.212.212.213.212.488V19H19v-5h-8Zm-1.4-6.4ZM15 19Zm0-.7Z"/>
    </Icon>
  );
});

IconMaterialVillaW100.displayName = 'AmauiIconMaterialVillaW100';

export default IconMaterialVillaW100;
