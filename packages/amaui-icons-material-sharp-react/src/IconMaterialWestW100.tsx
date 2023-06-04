import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWestW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WestW100'

      short_name='West'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.2 18.175 3.025 12 9.2 5.825l.5.5-5.325 5.325h16.1v.7h-16.1L9.7 17.675Z"/>
    </Icon>
  );
});

IconMaterialWestW100.displayName = 'AmauiIconMaterialWestW100';

export default IconMaterialWestW100;
