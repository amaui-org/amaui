import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoCameraFrontW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraFrontW100'

      short_name='VideoCameraFront'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.525 15.1h6.2v-.05q0-1.025-1.187-1.338-1.188-.312-1.913-.312-.725 0-1.912.312-1.188.313-1.188 1.338Zm3.1-3.5q.575 0 .963-.388.387-.387.387-.962t-.387-.963Q11.2 8.9 10.625 8.9t-.962.387q-.388.388-.388.963t.388.962q.387.388.962.388Zm-6.7 7.1V5.3h13.4v6.2l2.75-2.75v6.5l-2.75-2.75v6.2Zm.7-.7h12V6h-12Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraFrontW100.displayName = 'AmauiIconMaterialVideoCameraFrontW100';

export default IconMaterialVideoCameraFrontW100;
