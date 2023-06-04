import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeightW100'

      short_name='Height'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.1 8.9 17l.5-.55 2.25 2.25V5.3L9.4 7.55 8.9 7 12 3.9 15.1 7l-.5.55-2.25-2.25v13.4l2.25-2.25.5.55Z"/>
    </Icon>
  );
});

IconMaterialHeightW100.displayName = 'AmauiIconMaterialHeightW100';

export default IconMaterialHeightW100;
