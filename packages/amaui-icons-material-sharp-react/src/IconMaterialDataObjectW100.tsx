import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataObjectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataObjectW100'

      short_name='DataObject'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.15 18.85V13.1H3.4v-2.2h1.75V5.15h4.2v.7h-3.5v5.75H4.1v.8h1.75v5.75h3.5v.7Zm9.5 0v-.7h3.5V12.4h1.75v-.8h-1.75V5.85h-3.5v-.7h4.2v5.75h1.75v2.2h-1.75v5.75Z"/>
    </Icon>
  );
});

IconMaterialDataObjectW100.displayName = 'AmauiIconMaterialDataObjectW100';

export default IconMaterialDataObjectW100;
