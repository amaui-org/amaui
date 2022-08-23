import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrailLengthShortSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrailLengthShortSharpW100'
      short_name='TrailLengthShort'

      {...props}
    >
      <path d="M15 16.35q-1.725 0-2.95-1.137-1.225-1.138-1.4-2.863h-6v-.7h6q.075-.875.563-1.788.487-.912 1.412-1.512H6.65v-.7H15q1.8 0 3.075 1.275Q19.35 10.2 19.35 12q0 1.8-1.275 3.075Q16.8 16.35 15 16.35Zm0-.7q1.5 0 2.575-1.075Q18.65 13.5 18.65 12q0-1.5-1.075-2.575Q16.5 8.35 15 8.35q-1.5 0-2.575 1.075Q11.35 10.5 11.35 12q0 1.5 1.075 2.575Q13.5 15.65 15 15.65Zm-7.35.7v-.7h1.7v.7ZM15 12Z"/>
    </Icon>
  );
});

IconMaterialTrailLengthShortSharpW100.displayName = 'AmauiIconMaterialTrailLengthShortSharpW100';

export default IconMaterialTrailLengthShortSharpW100;
