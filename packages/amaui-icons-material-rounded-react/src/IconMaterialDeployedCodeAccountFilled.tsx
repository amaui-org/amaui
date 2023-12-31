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
      <path d="M680-119q-8 0-16-2t-15-7l-120-70q-14-8-21.5-21.5T500-249v-141q0-16 7.5-29.5T529-441l120-70q7-5 15-7t16-2q8 0 15.5 2.5T710-511l120 70q14 8 22 21.5t8 29.5v141q0 16-8 29.5T830-198l-120 70q-7 4-14.5 6.5T680-119Zm-520-41q-33 0-56.5-23.5T80-240v-32q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-29 72-24 143t48 135H160Zm240-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm186 74 94 55 94-55-94-54-94 54Zm124 208 90-52v-110l-90 53v109Zm-150-52 90 53v-109l-90-53v109Z"/>
    </Icon>
  );
});

IconMaterialDeployedCodeAccountFilled.displayName = 'AmauiIconMaterialDeployedCodeAccountFilled';

export default IconMaterialDeployedCodeAccountFilled;
