import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlipW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipW100Filled'

      short_name='Flip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h5.35V5H5v14h4.65v.7Zm7.35 3.3V1.5h.7V23ZM19 5.525V5h-.525v-.7H19.7v1.225Zm0 7.3v-1.65h.7v1.65Zm-.525 6.875V19H19v-.525h.7V19.7ZM19 9.175v-1.65h.7v1.65Zm0 7.3v-1.65h.7v1.65ZM14.35 19.7V19h2.125v.7Zm0-14.7v-.7h2.125V5Z"/>
    </Icon>
  );
});

IconMaterialFlipW100Filled.displayName = 'AmauiIconMaterialFlipW100Filled';

export default IconMaterialFlipW100Filled;
