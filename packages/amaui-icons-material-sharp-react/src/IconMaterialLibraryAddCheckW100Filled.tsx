import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLibraryAddCheckW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryAddCheckW100Filled'

      short_name='LibraryAddCheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.05 13.1 4.75-4.75-.5-.5-4.25 4.25L9.9 9.95l-.5.5Zm-5.4 3.6V3.3h13.4v13.4Zm-2.7 2.7V6.8h.7v11.9h11.9v.7Z"/>
    </Icon>
  );
});

IconMaterialLibraryAddCheckW100Filled.displayName = 'AmauiIconMaterialLibraryAddCheckW100Filled';

export default IconMaterialLibraryAddCheckW100Filled;
