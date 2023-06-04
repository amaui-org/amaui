import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartScreenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartScreenW100Filled'

      short_name='SmartScreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.25 12.6q-.25 0-.425-.175T12.65 12q0-.25.175-.425t.425-.175q.25 0 .425.175t.175.425q0 .25-.175.425t-.425.175Zm-5 0q-.25 0-.425-.175T7.65 12q0-.25.175-.425t.425-.175q.25 0 .425.175T8.85 12q0 .25-.175.425t-.425.175Zm7.5 0q-.25 0-.425-.175T15.15 12q0-.25.175-.425t.425-.175q.25 0 .425.175t.175.425q0 .25-.175.425t-.425.175Zm-5 0q-.25 0-.425-.175T10.15 12q0-.25.175-.425t.425-.175q.25 0 .425.175t.175.425q0 .25-.175.425t-.425.175ZM3.8 17.7q-.65 0-1.075-.425Q2.3 16.85 2.3 16.2V7.8q0-.65.425-1.075Q3.15 6.3 3.8 6.3h16.4q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425Zm1.55-.7h13.3V7H5.35Z"/>
    </Icon>
  );
});

IconMaterialSmartScreenW100Filled.displayName = 'AmauiIconMaterialSmartScreenW100Filled';

export default IconMaterialSmartScreenW100Filled;
