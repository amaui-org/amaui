import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolcanoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolcanoFilled'

      short_name='Volcano'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m2 22 4-9h3l2-5h7l4 14ZM13 5V1h2v4Zm4.525 1.875-1.4-1.4L18.95 2.65l1.425 1.4Zm-7.05 0L7.65 4.05l1.4-1.425 2.825 2.85Z"/>
    </Icon>
  );
});

IconMaterialVolcanoFilled.displayName = 'AmauiIconMaterialVolcanoFilled';

export default IconMaterialVolcanoFilled;
