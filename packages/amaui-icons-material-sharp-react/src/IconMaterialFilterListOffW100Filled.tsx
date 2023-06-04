import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterListOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterListOffW100Filled'

      short_name='FilterListOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.85 20.85 3.15 4.15l.5-.5 16.7 16.7ZM3.65 6.35v-.7h1.675v.7Zm3 5.5v-.7h4.2v.7Zm2.525-5.5-.7-.7H20.35v.7Zm1.475 11v-.7h2.7v.7Zm4.025-5.5-.7-.7h3.375v.7Z"/>
    </Icon>
  );
});

IconMaterialFilterListOffW100Filled.displayName = 'AmauiIconMaterialFilterListOffW100Filled';

export default IconMaterialFilterListOffW100Filled;
