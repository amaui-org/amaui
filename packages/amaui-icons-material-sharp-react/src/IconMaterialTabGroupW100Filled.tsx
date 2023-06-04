import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabGroupW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabGroupW100Filled'

      short_name='TabGroup'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M158 872V368h28v476h476v28H158Zm108-108V228h536v536H266Zm268-398h240V256H534v110Z"/>
    </Icon>
  );
});

IconMaterialTabGroupW100Filled.displayName = 'AmauiIconMaterialTabGroupW100Filled';

export default IconMaterialTabGroupW100Filled;
