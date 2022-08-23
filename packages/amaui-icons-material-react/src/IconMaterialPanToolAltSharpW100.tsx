import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanToolAltSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolAltSharpW100'
      short_name='PanToolAlt'

      {...props}
    >
      <path d="M10.175 19.7 5.675 15.25 6.425 14.5 10.225 15.25V5.5Q10.225 5 10.575 4.65Q10.925 4.3 11.425 4.3Q11.925 4.3 12.275 4.65Q12.625 5 12.625 5.5V10.8H13.825L18.625 13.15L17.475 19.7ZM10.475 19H16.875L17.825 13.575L13.675 11.5H11.925V5.5Q11.925 5.275 11.788 5.137Q11.65 5 11.425 5Q11.2 5 11.062 5.137Q10.925 5.275 10.925 5.5V16.1L6.675 15.25ZM10.475 19H10.925Q10.925 19 11.062 19Q11.2 19 11.425 19Q11.65 19 11.788 19Q11.925 19 11.925 19H13.675H16.875Z"/>
    </Icon>
  );
});

IconMaterialPanToolAltSharpW100.displayName = 'AmauiIconMaterialPanToolAltSharpW100';

export default IconMaterialPanToolAltSharpW100;
