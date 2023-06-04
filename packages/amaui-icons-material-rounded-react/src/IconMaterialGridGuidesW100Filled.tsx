import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGridGuidesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridGuidesW100Filled'

      short_name='GridGuides'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M219 856h521L621 737q-29 25-64.5 39T480 790q-41 0-76.5-14T339 737L219 856Zm-19-20 119-119q-25-29-39-64.5T266 576q0-41 14-76.5t39-64.5L200 315v521Zm139-139 121-121-121-121q-21 25-33 55.5T294 576q0 35 12 65.5t33 55.5Zm141 65q35 0 65.5-12t55.5-33L480 595 358 717q25 21 56 33t66 12Zm0-206 121-121q-25-21-55.5-33T480 390q-35 0-65.5 12T359 435l121 121Zm141 141q21-25 33-55.5t12-65.5q0-35-12-66t-33-56L500 575l121 122Zm139 139V315L641 435q25 29 39 64.5t14 76.5q0 41-14 76.5T641 717l119 119ZM621 415l120-119H220l119 119q29-25 64.5-39t76.5-14q41 0 76.5 14t64.5 39ZM232 884q-26 0-43-17t-17-43V328q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 25-17 42.5T728 884H232Z"/>
    </Icon>
  );
});

IconMaterialGridGuidesW100Filled.displayName = 'AmauiIconMaterialGridGuidesW100Filled';

export default IconMaterialGridGuidesW100Filled;
