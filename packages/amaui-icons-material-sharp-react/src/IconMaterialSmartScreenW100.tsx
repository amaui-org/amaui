import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartScreenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartScreenW100'

      short_name='SmartScreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.25 12.6q-.25 0-.425-.175T12.65 12q0-.25.175-.425t.425-.175q.25 0 .425.175t.175.425q0 .25-.175.425t-.425.175Zm-5 0q-.25 0-.425-.175T7.65 12q0-.25.175-.425t.425-.175q.25 0 .425.175T8.85 12q0 .25-.175.425t-.425.175Zm7.5 0q-.25 0-.425-.175T15.15 12q0-.25.175-.425t.425-.175q.25 0 .425.175t.175.425q0 .25-.175.425t-.425.175Zm-5 0q-.25 0-.425-.175T10.15 12q0-.25.175-.425t.425-.175q.25 0 .425.175t.175.425q0 .25-.175.425t-.425.175ZM2.3 17.7V6.3h19.4v11.4Zm3.05-.7h13.3V7H5.35ZM3 17h1.65V7H3Zm16.35 0H21V7h-1.65ZM3 7h1.65Zm16.35 0H21Z"/>
    </Icon>
  );
});

IconMaterialSmartScreenW100.displayName = 'AmauiIconMaterialSmartScreenW100';

export default IconMaterialSmartScreenW100;
