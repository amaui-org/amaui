import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyYuan = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyYuan'

      short_name='CurrencyYuan'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><polygon points="13.28,12 18,12 18,14 13,14 13,21 11,21 11,14 6,14 6,12 10.72,12 5,3 7.37,3 12,10.29 16.63,3 19,3"/></g>
    </Icon>
  );
});

IconMaterialCurrencyYuan.displayName = 'AmauiIconMaterialCurrencyYuan';

export default IconMaterialCurrencyYuan;
