import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGraphicEqSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GraphicEqSharp'
      short_name='GraphicEq'

      {...props}
    >
      <path d="M7 18V6H9V18ZM11 22V2H13V22ZM3 14V10H5V14ZM15 18V6H17V18ZM19 14V10H21V14Z"/>
    </Icon>
  );
});

IconMaterialGraphicEqSharp.displayName = 'AmauiIconMaterialGraphicEqSharp';

export default IconMaterialGraphicEqSharp;
