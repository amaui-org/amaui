import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddLocationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLocationW100'

      short_name='AddLocation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 13.35q.15 0 .25-.1t.1-.25v-2.65H15q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-2.65V7q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.65H9q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h2.65V13q0 .15.1.25t.25.1Zm0 7.175q3.15-2.7 4.9-5.563 1.75-2.862 1.75-4.762 0-3.025-1.925-4.938Q14.8 3.35 12 3.35T7.275 5.262Q5.35 7.175 5.35 10.2q0 1.9 1.75 4.762 1.75 2.863 4.9 5.563Zm0 .675q-.15 0-.275-.037-.125-.038-.25-.138-3.45-3.2-5.137-5.938Q4.65 12.35 4.65 10.2q0-3.45 2.225-5.5T12 2.65q2.9 0 5.125 2.05t2.225 5.5q0 2.15-1.687 4.887-1.688 2.738-5.138 5.938-.1.1-.237.138-.138.037-.288.037Zm0-11Z"/>
    </Icon>
  );
});

IconMaterialAddLocationW100.displayName = 'AmauiIconMaterialAddLocationW100';

export default IconMaterialAddLocationW100;
