import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWebAssetOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebAssetOff'

      short_name='WebAssetOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21.775 18.925 20 17.15V8h-9.15l-4-4H20q.825 0 1.413.588Q22 5.175 22 6v12q0 .25-.05.488-.05.237-.175.437Zm-2.025 3.65L17.15 20H4q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4v2.85L1.35 4.2q-.3-.3-.3-.713 0-.412.3-.712t.712-.3q.413 0 .713.3l18.4 18.4q.3.3.3.7 0 .4-.3.7-.3.3-.713.3-.412 0-.712-.3ZM4 18h11.15l-10-10H4v10Z"/>
    </Icon>
  );
});

IconMaterialWebAssetOff.displayName = 'AmauiIconMaterialWebAssetOff';

export default IconMaterialWebAssetOff;
