import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsOffW100Filled'

      short_name='DirectionsOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.05 22.05-5.075-5.075L13.05 19.9q-.225.225-.5.338-.275.112-.55.112t-.55-.112q-.275-.113-.5-.338L4.1 13.05q-.225-.225-.337-.5-.113-.275-.113-.55t.113-.55q.112-.275.337-.5l3.425-3.425 5.825 5.8v1.025L2.5 3.5q-.1-.1-.112-.238Q2.375 3.125 2.5 3t.25-.125q.125 0 .25.125l18.55 18.55q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125ZM9 14.325q.15 0 .25-.1t.1-.25v-2.65h2l-.7-.7H9.4q-.3 0-.525.225-.225.225-.225.525v2.6q0 .15.1.25t.25.1Zm8.875.75-2.925-2.95.625-.625q.225-.225.225-.525 0-.3-.225-.525l-.9-.875q-.15-.15-.337-.063-.188.088-.188.288v.825h-.7l-4.525-4.5L10.95 4.1q.225-.225.5-.338.275-.112.55-.112t.55.112q.275.113.5.338l6.85 6.85q.225.225.338.5.112.275.112.55t-.112.55q-.113.275-.338.5Z"/>
    </Icon>
  );
});

IconMaterialDirectionsOffW100Filled.displayName = 'AmauiIconMaterialDirectionsOffW100Filled';

export default IconMaterialDirectionsOffW100Filled;
