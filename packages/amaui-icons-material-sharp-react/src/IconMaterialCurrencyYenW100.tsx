import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyYenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyYenW100'

      short_name='CurrencyYen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 19.7v-3.6h-5v-.7h5v-3.05h-5v-.7h4.6L6.575 4.3h.85L12 11.525 16.575 4.3h.85l-4.675 7.35h4.6v.7h-5v3.05h5v.7h-5v3.6Z"/>
    </Icon>
  );
});

IconMaterialCurrencyYenW100.displayName = 'AmauiIconMaterialCurrencyYenW100';

export default IconMaterialCurrencyYenW100;
