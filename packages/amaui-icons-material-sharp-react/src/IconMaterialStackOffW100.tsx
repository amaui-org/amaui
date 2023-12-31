import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackOffW100'

      short_name='StackOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m828-244-28-28v-288H512l-28-28h344v344ZM560-688v-112H272l-28-28h344v140h-28Zm96 272ZM400-160h360L400-520v360Zm408 48-20-20H372v-416L160-760v360h112v28H132v-416l-20-20 20-20 696 696-20 20ZM580-340Z"/>
    </Icon>
  );
});

IconMaterialStackOffW100.displayName = 'AmauiIconMaterialStackOffW100';

export default IconMaterialStackOffW100;
