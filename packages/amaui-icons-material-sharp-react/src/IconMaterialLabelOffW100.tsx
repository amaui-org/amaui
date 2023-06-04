import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabelOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelOffW100'

      short_name='LabelOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.75 15.7-.5-.5 2.3-3.2-3.575-5H8l-.7-.7h8.075L19.4 12Zm1.55 5.4-3.4-3.4H4.3V7.1L2.4 5.2l.5-.5 15.9 15.9Zm-8.7-8.7Zm2.525-1.3ZM14.2 17 5 7.8V17Z"/>
    </Icon>
  );
});

IconMaterialLabelOffW100.displayName = 'AmauiIconMaterialLabelOffW100';

export default IconMaterialLabelOffW100;
