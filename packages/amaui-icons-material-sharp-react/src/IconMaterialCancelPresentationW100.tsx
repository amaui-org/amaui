import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCancelPresentationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CancelPresentationW100'

      short_name='CancelPresentation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.4 15.1 2.6-2.6 2.6 2.6.5-.5-2.6-2.6 2.6-2.6-.5-.5-2.6 2.6-2.6-2.6-.5.5 2.6 2.6-2.6 2.6Zm-6.1 3.6V5.3h17.4v13.4ZM4 18h16V6H4Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialCancelPresentationW100.displayName = 'AmauiIconMaterialCancelPresentationW100';

export default IconMaterialCancelPresentationW100;
