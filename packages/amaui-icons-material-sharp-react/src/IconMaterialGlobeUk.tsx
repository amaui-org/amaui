import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGlobeUk = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlobeUk'

      short_name='GlobeUk'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 896q18 0 34.5-2t33.5-6l-48-72H360v-40l80-80h80V576h-80l-40-40v-80h-88v-69l80-118q-101 29-166.5 113T160 576h40v-80h160v80l-40 40v120H203q42 72 115 116t162 44Zm304-222q8-23 12-47.5t4-50.5q0-112-68-197.5T560 266v110l80 80v80h47l97 138ZM480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Z"/>
    </Icon>
  );
});

IconMaterialGlobeUk.displayName = 'AmauiIconMaterialGlobeUk';

export default IconMaterialGlobeUk;
