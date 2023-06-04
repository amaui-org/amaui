import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookW100Filled'

      short_name='Book'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 20.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v14.4q0 .65-.425 1.075-.425.425-1.075.425Zm6.1-11.2 1.25-.75 1.25.75q.2.125.4 0t.2-.35V4h-3.7v5.15q0 .225.2.35.2.125.4 0Z"/>
    </Icon>
  );
});

IconMaterialBookW100Filled.displayName = 'AmauiIconMaterialBookW100Filled';

export default IconMaterialBookW100Filled;
