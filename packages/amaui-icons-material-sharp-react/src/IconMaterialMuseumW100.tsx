import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMuseumW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MuseumW100'

      short_name='Museum'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 20.7V20h2V9.7h-2L12 3.6l8.7 6.1h-2V20h2v.7ZM6 20h12Zm2.8-2.65h.7V12.7l2.5 3.7 2.5-3.7v4.65h.7v-5.7h-.85L12 15.15l-2.35-3.5H8.8ZM18 20V8.65l-6-4.2-6 4.2V20Z"/>
    </Icon>
  );
});

IconMaterialMuseumW100.displayName = 'AmauiIconMaterialMuseumW100';

export default IconMaterialMuseumW100;
