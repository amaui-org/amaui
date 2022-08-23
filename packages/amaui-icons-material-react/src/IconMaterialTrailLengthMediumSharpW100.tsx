import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrailLengthMediumSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrailLengthMediumSharpW100'
      short_name='TrailLengthMedium'

      {...props}
    >
      <path d="M7.15 16.35v-.7h6.475q-.875-.575-1.375-1.438-.5-.862-.6-1.862h-6v-.7h6q.075-.9.55-1.775.475-.875 1.425-1.525H7.65v-.7H16q1.8 0 3.075 1.275Q20.35 10.2 20.35 12q0 1.8-1.275 3.075Q17.8 16.35 16 16.35Zm8.85-.7q1.5 0 2.575-1.075Q19.65 13.5 19.65 12q0-1.5-1.075-2.575Q17.5 8.35 16 8.35q-1.5 0-2.575 1.075Q12.35 10.5 12.35 12q0 1.5 1.075 2.575Q14.5 15.65 16 15.65Zm-12.35.7v-.7h2.5v.7ZM16 12Z"/>
    </Icon>
  );
});

IconMaterialTrailLengthMediumSharpW100.displayName = 'AmauiIconMaterialTrailLengthMediumSharpW100';

export default IconMaterialTrailLengthMediumSharpW100;
