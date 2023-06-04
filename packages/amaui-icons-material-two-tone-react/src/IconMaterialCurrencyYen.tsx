import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyYen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyYen'

      short_name='CurrencyYen'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><polygon points="13.92,11 18,11 18,13 13,13 13,15 18,15 18,17 13,17 13,21 11,21 11,17 6,17 6,15 11,15 11,13 6,13 6,11 10.08,11 5,3 7.37,3 12,10.29 16.63,3 19,3"/></g>
    </Icon>
  );
});

IconMaterialCurrencyYen.displayName = 'AmauiIconMaterialCurrencyYen';

export default IconMaterialCurrencyYen;
