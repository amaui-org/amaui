import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeployedCodeAccountFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeployedCodeAccountFilled'

      short_name='DeployedCodeAccount'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-110 500-215v-209l180-105 180 105v208L680-110ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-29 72-24 143t48 135H80Zm320-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm186 74 94 55 94-55-94-54-94 54Zm124 208 90-52v-110l-90 53v109Zm-150-52 90 53v-109l-90-53v109Z"/>
    </Icon>
  );
});

IconMaterialDeployedCodeAccountFilled.displayName = 'AmauiIconMaterialDeployedCodeAccountFilled';

export default IconMaterialDeployedCodeAccountFilled;
