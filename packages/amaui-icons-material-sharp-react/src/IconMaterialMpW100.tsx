import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MpW100'

      short_name='Mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.9 14.6h.7v-1.5h3V9.4h-3.7Zm.7-2.2v-2.3h2.3v2.3Zm-8.2 2.2h.7v-4.5h1.8v3h.7v-3h1.8v4.5h.7V9.4H6.4Zm-2.1 5.1V4.3h15.4v15.4ZM5 19h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialMpW100.displayName = 'AmauiIconMaterialMpW100';

export default IconMaterialMpW100;
