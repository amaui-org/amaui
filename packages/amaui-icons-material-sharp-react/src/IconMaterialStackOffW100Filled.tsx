import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackOffW100Filled'

      short_name='StackOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m828-244-28-28v-288H512l-28-28h344v344ZM560-688v-112H272l-28-28h344v140h-28Zm240 416L512-560h288v288Zm8 160-20-20H372v-416L160-760v360h112v28H132v-416l-20-20 20-20 696 696-20 20Z"/>
    </Icon>
  );
});

IconMaterialStackOffW100Filled.displayName = 'AmauiIconMaterialStackOffW100Filled';

export default IconMaterialStackOffW100Filled;
