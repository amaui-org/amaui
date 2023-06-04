import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddLocationAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLocationAltW100Filled'

      short_name='AddLocationAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.35 8q.15 0 .25-.1t.1-.25V5h2.65q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H18.7V1.65q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25V4.3h-2.65q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1H18v2.65q0 .15.1.25t.25.1ZM12 11.35q.575 0 .963-.388.387-.387.387-.962t-.387-.963Q12.575 8.65 12 8.65t-.962.387q-.388.388-.388.963t.388.962q.387.388.962.388Zm0 9.85q-.15 0-.275-.037-.125-.038-.25-.138-3.45-3.2-5.137-5.938Q4.65 12.35 4.65 10.2q0-3.45 2.225-5.5T12 2.65q.4 0 .9.05t.875.175q-.35.275-.562.75Q13 4.1 13 4.65q0 1 .675 1.675T15.35 7H16v.65q0 1 .675 1.675T18.35 10q.3 0 .538-.05.237-.05.437-.15.025.075.025.2v.2q0 2.15-1.687 4.887-1.688 2.738-5.138 5.938-.1.1-.237.138-.138.037-.288.037Z"/>
    </Icon>
  );
});

IconMaterialAddLocationAltW100Filled.displayName = 'AmauiIconMaterialAddLocationAltW100Filled';

export default IconMaterialAddLocationAltW100Filled;
