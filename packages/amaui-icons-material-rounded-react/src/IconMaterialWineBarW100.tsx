import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWineBarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WineBarW100'

      short_name='WineBar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.25 19.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.4v-4.65q-2.15-.325-3.325-1.838Q7.15 11 7.15 9V5.05q0-.325.213-.538.212-.212.537-.212h8.2q.325 0 .538.212.212.213.212.538V9q0 2-1.175 3.512-1.175 1.513-3.325 1.838V19h2.4q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM12 13.65q1.625 0 2.825-1.25 1.2-1.25 1.325-3.05h-8.3q.125 1.8 1.325 3.05 1.2 1.25 2.825 1.25Zm-4.15-5h8.3V5h-8.3Zm4.15 5Z"/>
    </Icon>
  );
});

IconMaterialWineBarW100.displayName = 'AmauiIconMaterialWineBarW100';

export default IconMaterialWineBarW100;
