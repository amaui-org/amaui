import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineEndArrowNotchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndArrowNotchW100'

      short_name='LineEndArrowNotch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.55 16.175 2.1-3.825h-12v-.7h12l-2.1-3.825L19.125 12Z"/>
    </Icon>
  );
});

IconMaterialLineEndArrowNotchW100.displayName = 'AmauiIconMaterialLineEndArrowNotchW100';

export default IconMaterialLineEndArrowNotchW100;
