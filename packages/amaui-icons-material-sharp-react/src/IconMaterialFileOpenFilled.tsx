import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileOpenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileOpenFilled'

      short_name='FileOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21.95 22.375 19 19.425v2.225h-2V16h5.65v2H20.4l2.95 2.95ZM13 9h5l-5-5ZM4 22V2h10l6 6v6h-5v8Z"/>
    </Icon>
  );
});

IconMaterialFileOpenFilled.displayName = 'AmauiIconMaterialFileOpenFilled';

export default IconMaterialFileOpenFilled;
