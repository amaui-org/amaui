import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMovingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovingW100'

      short_name='Moving'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m3.275 17.1-.5-.5 4.85-4.85q.7-.675 1.663-.688.962-.012 1.662.688l1.15 1.15q.5.5 1.175.487.675-.012 1.175-.487l5.575-5.55h-3.5v-.7h4.7v4.7h-.7v-3.5L14.95 13.4q-.7.675-1.675.687-.975.013-1.65-.662L10.45 12.25q-.5-.5-1.162-.488-.663.013-1.163.488Z"/>
    </Icon>
  );
});

IconMaterialMovingW100.displayName = 'AmauiIconMaterialMovingW100';

export default IconMaterialMovingW100;
