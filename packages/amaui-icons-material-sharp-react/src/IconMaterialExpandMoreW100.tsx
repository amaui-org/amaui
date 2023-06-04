import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExpandMoreW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandMoreW100'

      short_name='ExpandMore'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14.5 6.9 9.4l.5-.5 4.6 4.6 4.6-4.6.5.5Z"/>
    </Icon>
  );
});

IconMaterialExpandMoreW100.displayName = 'AmauiIconMaterialExpandMoreW100';

export default IconMaterialExpandMoreW100;
