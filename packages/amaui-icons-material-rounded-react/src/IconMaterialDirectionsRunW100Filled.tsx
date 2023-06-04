import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsRunW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsRunW100Filled'

      short_name='DirectionsRun'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.5 5.1q-.675 0-1.137-.463Q11.9 4.175 11.9 3.5t.463-1.138Q12.825 1.9 13.5 1.9t1.138.462q.462.463.462 1.138 0 .675-.462 1.137-.463.463-1.138.463Zm.5 17.25q-.15 0-.25-.1t-.1-.25v-5.225L10.5 13.75l-.775 3.475q-.125.575-.65.913-.525.337-1.125.212l-3.875-.775q-.125-.025-.212-.15-.088-.125-.038-.275.05-.125.163-.212.112-.088.237-.038l3.675.75q.35.075.612-.112.263-.188.338-.538l1.8-9.2-2.8 1.175q-.225.1-.362.287-.138.188-.138.438V12q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V9.7q0-.45.25-.825.25-.375.675-.55L10.65 7.05q.575-.225.85-.313.275-.087.5-.087.35 0 .65.187.3.188.5.513l1 1.6q.575.95 1.588 1.662 1.012.713 2.287.938.125.025.225.138.1.112.1.237 0 .15-.112.25-.113.1-.263.075-1.25-.2-2.537-1.013-1.288-.812-2.263-2.512L12.2 13.7l1.7 1.65q.225.225.338.5.112.275.112.575V22q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialDirectionsRunW100Filled.displayName = 'AmauiIconMaterialDirectionsRunW100Filled';

export default IconMaterialDirectionsRunW100Filled;
