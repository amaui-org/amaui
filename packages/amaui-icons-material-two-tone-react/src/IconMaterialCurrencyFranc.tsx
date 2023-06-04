import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyFranc = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyFranc'

      short_name='CurrencyFranc'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><polygon points="18,5 18,3 7,3 7,16 5,16 5,18 7,18 7,21 9,21 9,18 13,18 13,16 9,16 9,13 17,13 17,11 9,11 9,5"/></g>
    </Icon>
  );
});

IconMaterialCurrencyFranc.displayName = 'AmauiIconMaterialCurrencyFranc';

export default IconMaterialCurrencyFranc;
