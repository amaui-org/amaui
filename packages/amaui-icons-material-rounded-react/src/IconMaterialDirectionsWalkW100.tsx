import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsWalkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsWalkW100'

      short_name='DirectionsWalk'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.5 5.1q-.675 0-1.137-.463Q11.9 4.175 11.9 3.5t.463-1.138Q12.825 1.9 13.5 1.9t1.138.462q.462.463.462 1.138 0 .675-.462 1.137-.463.463-1.138.463ZM8.275 22.35q-.175 0-.288-.112-.112-.113-.062-.288L10.65 7.8l-2.8 1.175q-.225.1-.362.287-.138.188-.138.438V12q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V9.7q0-.45.25-.825.25-.375.675-.55l3.5-1.45q.625-.275 1.175-.188.55.088.9.663l.975 1.575q.575.95 1.6 1.675 1.025.725 2.3.95.125.025.225.138.1.112.1.237 0 .15-.112.25-.113.1-.263.075-1.25-.2-2.537-1.013-1.288-.812-2.263-2.512L12.2 13.7l1.7 1.65q.225.225.338.5.112.275.112.575V22q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-5.225L10.5 13.75l-1.9 8.325q-.025.125-.112.2-.088.075-.213.075Z"/>
    </Icon>
  );
});

IconMaterialDirectionsWalkW100.displayName = 'AmauiIconMaterialDirectionsWalkW100';

export default IconMaterialDirectionsWalkW100;
