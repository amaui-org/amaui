import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoneOutline = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneOutline'

      short_name='DoneOutline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.525 18 10.6-10.6L18.7 6l-9.2 9.175-4.225-4.25L3.85 12.35Zm0 2.825L1.05 12.35 5.275 8.1l4.25 4.25 9.15-9.175 4.3 4.2Z"/>
    </Icon>
  );
});

IconMaterialDoneOutline.displayName = 'AmauiIconMaterialDoneOutline';

export default IconMaterialDoneOutline;
