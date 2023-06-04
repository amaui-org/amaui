import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabelOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelOffFilled'

      short_name='LabelOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.8 22.6 16.2 19H3V5.8L1.4 4.2l1.4-1.4 18.4 18.4Zm-1.35-7L7.85 5h8.2L21 12Z"/>
    </Icon>
  );
});

IconMaterialLabelOffFilled.displayName = 'AmauiIconMaterialLabelOffFilled';

export default IconMaterialLabelOffFilled;
