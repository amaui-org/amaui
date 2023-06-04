import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoGraphW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoGraphW100'

      short_name='AutoGraph'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.25 7.425 7.65 6.1l-1.325-.6 1.325-.6.6-1.325.6 1.325 1.325.6-1.325.6Zm6.5 3-.45-.975-.975-.45.975-.45.45-.975.45.975.975.45-.975.45Zm-11 2-.45-.975-.975-.45.975-.45.45-.975.45.975.975.45-.975.45Zm.4 7.175-.5-.5 6.6-6.6 4 4 6.95-8 .5.45-7.4 8.6-4.05-4.05Z"/>
    </Icon>
  );
});

IconMaterialAutoGraphW100.displayName = 'AmauiIconMaterialAutoGraphW100';

export default IconMaterialAutoGraphW100;
