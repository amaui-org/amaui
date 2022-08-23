import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolcanoSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolcanoSharp'
      short_name='Volcano'

      {...props}
    >
      <path d="M2 22 6 13H9L11 8H18L22 22ZM5.075 20H19.35L16.5 10H12.35L10.35 15H7.3ZM13 5V1H15V5ZM17.525 6.875 16.125 5.475 18.95 2.65 20.375 4.05ZM10.475 6.875 7.65 4.05 9.05 2.625 11.875 5.475ZM19.35 20H5.075H7.3H10.35H12.35H16.5Z"/>
    </Icon>
  );
});

IconMaterialVolcanoSharp.displayName = 'AmauiIconMaterialVolcanoSharp';

export default IconMaterialVolcanoSharp;
