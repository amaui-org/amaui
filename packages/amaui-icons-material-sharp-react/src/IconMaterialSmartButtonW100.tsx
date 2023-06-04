import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartButtonW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartButtonW100'

      short_name='SmartButton'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.65 16.35v-8.7h18.7v8.7h-2.2v-.7h1.5v-7.3H3.35v7.3h6.5v.7Zm11.85 1.8-.825-1.825-1.825-.825 1.825-.825.825-1.825.825 1.825 1.825.825-1.825.825ZM17 14l-.625-1.375L15 12l1.375-.625L17 10l.625 1.375L19 12l-1.375.625Z"/>
    </Icon>
  );
});

IconMaterialSmartButtonW100.displayName = 'AmauiIconMaterialSmartButtonW100';

export default IconMaterialSmartButtonW100;
