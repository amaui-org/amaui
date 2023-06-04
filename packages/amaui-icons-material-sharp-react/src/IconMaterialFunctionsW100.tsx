import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFunctionsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FunctionsW100'

      short_name='Functions'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 18.85v-.45l6.4-6.4L7 5.6v-.45h10v.7H8.25L14.4 12l-6.15 6.15H17v.7Z"/>
    </Icon>
  );
});

IconMaterialFunctionsW100.displayName = 'AmauiIconMaterialFunctionsW100';

export default IconMaterialFunctionsW100;
