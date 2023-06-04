import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoneOutlineW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneOutlineW100'

      short_name='DoneOutline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.525 17.075 9.65-9.65-.5-.5-9.15 9.15L5.3 11.85l-.5.5Zm0 1L3.8 12.35l1.5-1.5 4.225 4.225L18.7 5.9l1.5 1.5Z"/>
    </Icon>
  );
});

IconMaterialDoneOutlineW100.displayName = 'AmauiIconMaterialDoneOutlineW100';

export default IconMaterialDoneOutlineW100;
