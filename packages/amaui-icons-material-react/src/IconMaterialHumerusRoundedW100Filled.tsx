import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHumerusRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumerusRoundedW100Filled'
      short_name='Humerus'

      {...props}
    >
      <path d="M9.05 20.7q-.725 0-1.225-.512-.5-.513-.525-1.238.025-.35.15-.65.125-.3.375-.55l2.5-2.475V10.75q-.025-.65-.438-1.15-.412-.5-.962-.9Q8 8 7.65 7.362q-.35-.637-.35-1.337 0-1.175.813-1.95.812-.775 2.012-.775.65 0 1.2.162.55.163 1.05.513.15.1.3.175.15.075.3.075.4 0 .875-.45.375-.25.7-.363.325-.112.625-.112.65 0 1.087.437.438.438.438 1.088 0 .375-.15.712-.15.338-.425.638l-2.4 2.475v6.6l2.475 2.5q.25.25.387.562.138.313.138.663 0 .725-.5 1.213-.5.487-1.225.487-.35 0-.65-.125-.3-.125-.55-.375-.35-.35-.812-.538-.463-.187-.963-.187-.5 0-.963.187-.462.188-.812.538-.25.25-.55.387-.3.138-.65.138Z"/>
    </Icon>
  );
});

IconMaterialHumerusRoundedW100Filled.displayName = 'AmauiIconMaterialHumerusRoundedW100Filled';

export default IconMaterialHumerusRoundedW100Filled;
