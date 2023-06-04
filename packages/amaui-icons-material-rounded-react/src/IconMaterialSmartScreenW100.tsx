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
      <path d="M13.25 12.6q-.25 0-.425-.175T12.65 12q0-.25.175-.425t.425-.175q.25 0 .425.175t.175.425q0 .25-.175.425t-.425.175Zm-5 0q-.25 0-.425-.175T7.65 12q0-.25.175-.425t.425-.175q.25 0 .425.175T8.85 12q0 .25-.175.425t-.425.175Zm7.5 0q-.25 0-.425-.175T15.15 12q0-.25.175-.425t.425-.175q.25 0 .425.175t.175.425q0 .25-.175.425t-.425.175Zm-5 0q-.25 0-.425-.175T10.15 12q0-.25.175-.425t.425-.175q.25 0 .425.175t.175.425q0 .25-.175.425t-.425.175ZM3.8 17.7q-.65 0-1.075-.425Q2.3 16.85 2.3 16.2V7.8q0-.65.425-1.075Q3.15 6.3 3.8 6.3h16.4q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425Zm1.55-.7h13.3V7H5.35Zm-.7 0V7H3.8q-.3 0-.55.25Q3 7.5 3 7.8v8.4q0 .3.25.55.25.25.55.25Zm14.7 0h.85q.3 0 .55-.25.25-.25.25-.55V7.8q0-.3-.25-.55Q20.5 7 20.2 7h-.85ZM21 7h-1.65H21ZM3 7h1.65H3Z"/>
    </Icon>
  );
});

IconMaterialSmartScreenW100.displayName = 'AmauiIconMaterialSmartScreenW100';

export default IconMaterialSmartScreenW100;
