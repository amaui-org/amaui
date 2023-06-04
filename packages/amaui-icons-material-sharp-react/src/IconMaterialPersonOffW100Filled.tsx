import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonOffW100Filled'

      short_name='PersonOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.85 20.85 17.2 18.2H5.3v-1.3q0-.55.338-1.037.337-.488.912-.763 1.375-.65 2.738-.975Q10.65 13.8 12 13.8h.413q.212 0 .412.025L3.15 4.15l.5-.5 16.7 16.7ZM18 15.375Zm-4.475-4.65-3.75-3.75q.375-.575.963-.875.587-.3 1.262-.3 1.125 0 1.913.788.787.787.787 1.912 0 .675-.3 1.262-.3.588-.875.963Z"/>
    </Icon>
  );
});

IconMaterialPersonOffW100Filled.displayName = 'AmauiIconMaterialPersonOffW100Filled';

export default IconMaterialPersonOffW100Filled;
