import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsAltOffRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsAltOffRoundedW100Filled'
      short_name='DirectionsAltOff'

      {...props}
    >
      <path d="M15.95 16.975 13.025 19.9q-.225.225-.5.338-.275.112-.55.112t-.55-.112q-.275-.113-.5-.338l-6.85-6.85q-.225-.225-.338-.5-.112-.275-.112-.55t.112-.55q.113-.275.338-.5L7 8.025 2.475 3.5q-.1-.1-.113-.238-.012-.137.113-.262t.25-.125q.125 0 .25.125l18.55 18.55q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125Zm-2.425-2.425-.5-.5-1.3 1.3q-.1.1-.112.237-.013.138.112.263t.25.125q.125 0 .25-.125Zm-2.2-2.2-.7-.7h-2.4q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm3.975.175.225-.225q.125-.125.125-.275 0-.15-.125-.275L11.95 8.175q-.1-.1-.237-.113-.138-.012-.263.113t-.125.25q0 .125.125.25L8.9 6.125 10.925 4.1q.225-.225.5-.338.275-.112.55-.112t.55.112q.275.113.5.338l6.85 6.85q.225.225.338.5.112.275.112.55t-.112.55q-.113.275-.338.5l-2.025 2.025Z"/>
    </Icon>
  );
});

IconMaterialDirectionsAltOffRoundedW100Filled.displayName = 'AmauiIconMaterialDirectionsAltOffRoundedW100Filled';

export default IconMaterialDirectionsAltOffRoundedW100Filled;
