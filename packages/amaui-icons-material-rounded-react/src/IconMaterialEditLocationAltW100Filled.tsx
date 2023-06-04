import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditLocationAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditLocationAltW100Filled'

      short_name='EditLocationAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.15 9.85v-.5l5-5 .5.5-5 5Zm6.2-5.7-.5-.5.5-.5q.125-.125.25-.175.125-.05.25.075l.1.1q.125.125.075.25t-.175.25ZM12 21.2q-.15 0-.275-.037-.125-.038-.25-.138-3.45-3.2-5.137-5.938Q4.65 12.35 4.65 10.2q0-3.45 2.225-5.5T12 2.65q.875 0 1.7.2t1.575.55l-4.9 4.9q-.125.125-.175.25-.05.125-.05.275V11.1q0 .325.213.537.212.213.537.213h2.275q.15 0 .275-.05.125-.05.25-.175l4.875-4.875q.375.75.575 1.613.2.862.2 1.837 0 2.15-1.687 4.887-1.688 2.738-5.138 5.938-.1.1-.237.138-.138.037-.288.037Z"/>
    </Icon>
  );
});

IconMaterialEditLocationAltW100Filled.displayName = 'AmauiIconMaterialEditLocationAltW100Filled';

export default IconMaterialEditLocationAltW100Filled;
