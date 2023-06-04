import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanToolAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolAltW100Filled'

      short_name='PanToolAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.475 19.7q-.15 0-.287-.063-.138-.062-.263-.187l-3.8-3.75q-.175-.175-.187-.413-.013-.237.112-.462.1-.175.313-.237.212-.063.412-.013l3.45.675V5.5q0-.5.35-.85t.85-.35q.5 0 .85.35t.35.85v5.3h1.05q.1 0 .188.025.087.025.162.075l3.05 1.5q.725.35 1.038 1.137.312.788.162 1.613l-.7 4q-.05.25-.237.4-.188.15-.463.15Z"/>
    </Icon>
  );
});

IconMaterialPanToolAltW100Filled.displayName = 'AmauiIconMaterialPanToolAltW100Filled';

export default IconMaterialPanToolAltW100Filled;
