import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAzmFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AzmFilled'

      short_name='Azm'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m640 776 160-160V256H440L280 416h360v360Zm-240 240 160-160V496H200L40 656h360v360Z"/>
    </Icon>
  );
});

IconMaterialAzmFilled.displayName = 'AmauiIconMaterialAzmFilled';

export default IconMaterialAzmFilled;
