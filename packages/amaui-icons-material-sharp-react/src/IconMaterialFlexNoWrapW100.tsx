import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlexNoWrapW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlexNoWrapW100'

      short_name='FlexNoWrap'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M92 739V413h176v326H92Zm300 0V413h176v326H392Zm300 0V413h176v326H692Zm-572-28h120V441H120v270Zm610 0h110V441H730v270Z"/>
    </Icon>
  );
});

IconMaterialFlexNoWrapW100.displayName = 'AmauiIconMaterialFlexNoWrapW100';

export default IconMaterialFlexNoWrapW100;
