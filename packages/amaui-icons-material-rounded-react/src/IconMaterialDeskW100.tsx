import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeskW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeskW100'

      short_name='Desk'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.4 17V8.15q0-.325.213-.538.212-.212.537-.212h15.7q.325 0 .538.212.212.213.212.538V17q0 .15-.1.25t-.25.1q-.075 0-.137-.025-.063-.025-.113-.075-.05-.05-.075-.113-.025-.062-.025-.137v-1.65h-4.925V17q0 .075-.025.137-.025.063-.075.113-.05.05-.112.075-.063.025-.138.025-.15 0-.25-.1t-.1-.25V8.1H4.1V17q0 .15-.1.25t-.25.1q-.15 0-.25-.1T3.4 17Zm11.575-6.35H19.9V8.1h-4.925Zm0 4H19.9v-3.3h-4.925Z"/>
    </Icon>
  );
});

IconMaterialDeskW100.displayName = 'AmauiIconMaterialDeskW100';

export default IconMaterialDeskW100;
