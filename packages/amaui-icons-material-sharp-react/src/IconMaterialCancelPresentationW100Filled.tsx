import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCancelPresentationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CancelPresentationW100Filled'

      short_name='CancelPresentation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.4 15.1 2.6-2.6 2.6 2.6.5-.5-2.6-2.6 2.6-2.6-.5-.5-2.6 2.6-2.6-2.6-.5.5 2.6 2.6-2.6 2.6Zm-6.1 3.6V5.3h17.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialCancelPresentationW100Filled.displayName = 'AmauiIconMaterialCancelPresentationW100Filled';

export default IconMaterialCancelPresentationW100Filled;
