import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlipToBackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipToBackW100Filled'

      short_name='FlipToBack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.3 9V7H9v2Zm0 4v-2H9v2Zm0-8v-.7H9V5ZM11 15.7V15h2v.7ZM19 5v-.7h.7V5Zm-8 0v-.7h2V5ZM8.3 15.7V15H9v.7ZM19 13v-2h.7v2Zm0-4V7h.7v2Zm0 6.7V15h.7v.7Zm-14.7 4V7H5v12h12v.7ZM15 5v-.7h2V5Zm0 10.7V15h2v.7Z"/>
    </Icon>
  );
});

IconMaterialFlipToBackW100Filled.displayName = 'AmauiIconMaterialFlipToBackW100Filled';

export default IconMaterialFlipToBackW100Filled;
