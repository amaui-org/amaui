import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterAltW100'

      short_name='FilterAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.7 12.55V18q0 .3-.2.5t-.5.2q-.3 0-.5-.2t-.2-.5v-5.45L6.025 5.9q-.15-.2-.037-.4.112-.2.337-.2h11.35q.225 0 .338.2.112.2-.038.4Zm-.7-.25L16.95 6h-9.9Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialFilterAltW100.displayName = 'AmauiIconMaterialFilterAltW100';

export default IconMaterialFilterAltW100;
