import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlexWrapW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlexWrapW100'

      short_name='FlexWrap'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M92 924V638h176v286H92Zm300 0V638h176v286H392Zm300 0V638h176v286H692Zm-272-28h120V666H420v230ZM92 514V228h176v286H92Zm300 0V228h176v286H392Zm300 0V228h176v286H692Zm-572-28h120V256H120v230Zm610 0h110V256H730v230Z"/>
    </Icon>
  );
});

IconMaterialFlexWrapW100.displayName = 'AmauiIconMaterialFlexWrapW100';

export default IconMaterialFlexWrapW100;
