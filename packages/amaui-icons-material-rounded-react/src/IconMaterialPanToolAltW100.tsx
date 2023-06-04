import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanToolAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolAltW100'

      short_name='PanToolAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.475 19.7q-.15 0-.287-.063-.138-.062-.263-.187L6.2 15.775q-.175-.175-.212-.425-.038-.25.087-.45.1-.2.313-.287.212-.088.437-.038l3.4.675V5.5q0-.5.35-.85t.85-.35q.5 0 .85.35t.35.85v5.3h1.05q.1 0 .188.025.087.025.162.075l3.05 1.5q.725.35 1.038 1.137.312.788.162 1.613l-.7 4q-.05.25-.237.4-.188.15-.463.15Zm0-.7h6.4l.7-4q.1-.525-.062-1.1-.163-.575-.738-.85l-3.1-1.55h-1.75v-6q0-.225-.137-.363Q11.65 5 11.425 5q-.225 0-.363.137-.137.138-.137.363v10.6l-4.25-.85Zm0 0H16.775Z"/>
    </Icon>
  );
});

IconMaterialPanToolAltW100.displayName = 'AmauiIconMaterialPanToolAltW100';

export default IconMaterialPanToolAltW100;
