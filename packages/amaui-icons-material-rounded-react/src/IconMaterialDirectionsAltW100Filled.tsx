import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsAltW100Filled'

      short_name='DirectionsAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.35q-.275 0-.55-.112-.275-.113-.5-.338L4.1 13.05q-.225-.225-.337-.5-.113-.275-.113-.55t.113-.55q.112-.275.337-.5l6.85-6.85q.225-.225.5-.338.275-.112.55-.112t.55.112q.275.113.5.338l6.85 6.85q.225.225.338.5.112.275.112.55t-.112.55q-.113.275-.338.5l-6.85 6.85q-.225.225-.5.338-.275.112-.55.112Zm2.75-8-3 3q-.1.1-.113.237-.012.138.113.263t.25.125q.125 0 .25-.125l3.325-3.325Q15.8 12.3 15.8 12q0-.3-.225-.525L12.25 8.15q-.1-.1-.238-.113-.137-.012-.262.113t-.125.25q0 .125.125.25l3 3h-6.5q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Z"/>
    </Icon>
  );
});

IconMaterialDirectionsAltW100Filled.displayName = 'AmauiIconMaterialDirectionsAltW100Filled';

export default IconMaterialDirectionsAltW100Filled;
