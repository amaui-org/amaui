import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFinanceModeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FinanceModeW100Filled'

      short_name='FinanceMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M356-486v-198h48v198l-24-26-24 26Zm166 98v-456h48v408l-48 48Zm-334 70v-206h48v158l-48 48Zm-6 174 198-198 142 122 284-284H706v-28h148v148h-28v-100L522-180 380-302 222-144h-40Z"/>
    </Icon>
  );
});

IconMaterialFinanceModeW100Filled.displayName = 'AmauiIconMaterialFinanceModeW100Filled';

export default IconMaterialFinanceModeW100Filled;
