import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoStableFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoStableFilled'

      short_name='VideoStable'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 17.725q.4.1.75-.1t.475-.6l1.8-6.725q.125-.425-.087-.775-.213-.35-.613-.45L8.05 6.275q-.4-.1-.75.1t-.475.6l-1.8 6.725q-.125.425.088.775.212.35.612.45ZM7.225 13.25 8.5 8.45ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialVideoStableFilled.displayName = 'AmauiIconMaterialVideoStableFilled';

export default IconMaterialVideoStableFilled;
