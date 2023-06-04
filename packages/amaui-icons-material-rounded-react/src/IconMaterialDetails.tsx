import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDetails = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Details'

      short_name='Details'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.7 21q-.575 0-.862-.488-.288-.487-.013-.987l8.3-14.95q.275-.5.875-.5t.875.5l8.3 14.95q.275.5-.012.987-.288.488-.863.488Zm1.7-2H11V8.925Zm7.6 0h5.6L13 8.925Z"/>
    </Icon>
  );
});

IconMaterialDetails.displayName = 'AmauiIconMaterialDetails';

export default IconMaterialDetails;
