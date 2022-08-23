import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanoramaHorizontalSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaHorizontalSharpW100Filled'
      short_name='PanoramaHorizontal'

      {...props}
    >
      <path d="M3.3 18.55V5.5Q5.325 6.075 7.338 6.462Q9.35 6.85 12 6.85Q14.65 6.85 16.663 6.462Q18.675 6.075 20.7 5.5V18.55Q18.675 17.975 16.663 17.613Q14.65 17.25 12 17.25Q9.35 17.25 7.338 17.613Q5.325 17.975 3.3 18.55Z"/>
    </Icon>
  );
});

IconMaterialPanoramaHorizontalSharpW100Filled.displayName = 'AmauiIconMaterialPanoramaHorizontalSharpW100Filled';

export default IconMaterialPanoramaHorizontalSharpW100Filled;
