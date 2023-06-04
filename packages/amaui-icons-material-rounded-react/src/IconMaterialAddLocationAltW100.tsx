import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddLocationAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLocationAltW100'

      short_name='AddLocationAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.35 8q.15 0 .25-.1t.1-.25V5h2.65q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H18.7V1.65q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25V4.3h-2.65q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1H18v2.65q0 .15.1.25t.25.1ZM12 11.35q.575 0 .963-.388.387-.387.387-.962t-.387-.963Q12.575 8.65 12 8.65t-.962.387q-.388.388-.388.963t.388.962q.387.388.962.388Zm0 9.85q-.15 0-.275-.037-.125-.038-.25-.138-3.45-3.2-5.137-5.938Q4.65 12.35 4.65 10.2q0-3.45 2.225-5.5T12 2.65q.25 0 .5.012.25.013.5.063v.7q-.25-.05-.488-.063-.237-.012-.512-.012-2.8 0-4.725 1.912Q5.35 7.175 5.35 10.2q0 1.9 1.75 4.762 1.75 2.863 4.9 5.563 3.15-2.7 4.9-5.563 1.75-2.862 1.75-4.762V10h.7v.2q0 2.15-1.687 4.887-1.688 2.738-5.138 5.938-.1.1-.237.138-.138.037-.288.037Zm.35-9.575Z"/>
    </Icon>
  );
});

IconMaterialAddLocationAltW100.displayName = 'AmauiIconMaterialAddLocationAltW100';

export default IconMaterialAddLocationAltW100;
