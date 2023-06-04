import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabelOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelOff'

      short_name='LabelOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.45 15.6 17 14.15 18.55 12 15 7H9.85l-2-2h8.2L21 12Zm1.35 7L16.2 19H3V5.8L1.4 4.2l1.4-1.4 18.4 18.4ZM9.575 12.4Zm3.85-1.825ZM14.2 17 5 7.8V17Z"/>
    </Icon>
  );
});

IconMaterialLabelOff.displayName = 'AmauiIconMaterialLabelOff';

export default IconMaterialLabelOff;
