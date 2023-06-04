import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNightlifeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlifeW100Filled'

      short_name='Nightlife'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.7 19.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.65V12.9L3.725 7.475Q3.475 7.1 3.7 6.7t.65-.4h6.7q.45 0 .663.4.212.4-.038.775L8.05 12.9v5.75H9.7q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM5.6 9h4.2l1.35-2h-6.9Zm10.1 10.35q-.975 0-1.662-.687-.688-.688-.688-1.663 0-.975.688-1.663.687-.687 1.662-.687.425 0 .825.162.4.163.825.538V7.8q0-.625.438-1.062.437-.438 1.062-.438h1.5q.275 0 .487.2.213.2.213.5 0 .275-.213.487-.212.213-.487.213h-2.3V17q0 .975-.687 1.663-.688.687-1.663.687Z"/>
    </Icon>
  );
});

IconMaterialNightlifeW100Filled.displayName = 'AmauiIconMaterialNightlifeW100Filled';

export default IconMaterialNightlifeW100Filled;
