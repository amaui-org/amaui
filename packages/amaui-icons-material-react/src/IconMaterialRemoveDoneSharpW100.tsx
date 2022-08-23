import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRemoveDoneSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveDoneSharpW100'
      short_name='RemoveDone'

      {...props}
    >
      <path d="M21.8 20.8 15.15 14.15 12.4 16.9 7.65 12.15 8.15 11.65 12.4 15.9 14.6 13.65 4.45 3.5 4.95 3 22.3 20.35ZM17.05 12.25 16.55 11.75 21.6 6.7 22.1 7.2ZM14.2 9.45 13.7 8.95 15.95 6.7 16.45 7.2ZM6.75 16.9 2 12.15 2.5 11.65 6.75 15.9 7.65 15 8.15 15.5Z"/>
    </Icon>
  );
});

IconMaterialRemoveDoneSharpW100.displayName = 'AmauiIconMaterialRemoveDoneSharpW100';

export default IconMaterialRemoveDoneSharpW100;
