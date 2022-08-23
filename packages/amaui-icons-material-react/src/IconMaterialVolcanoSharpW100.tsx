import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolcanoSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolcanoSharpW100'
      short_name='Volcano'

      {...props}
    >
      <path d="M4 20.7 6.85 14.3H9.875L11.875 9.3H17.025L20.275 20.7ZM5.075 20H19.35L16.5 10H12.35L10.35 15H7.3ZM14.15 5.35V2.65H14.85V5.35ZM18.025 6.95 17.55 6.475 19.45 4.575 19.95 5.05ZM10.975 6.95 9.075 5.05 9.55 4.55 11.45 6.475ZM19.35 20H5.075H7.3H10.35H12.35H16.5Z"/>
    </Icon>
  );
});

IconMaterialVolcanoSharpW100.displayName = 'AmauiIconMaterialVolcanoSharpW100';

export default IconMaterialVolcanoSharpW100;
