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
      <path d="M3.025 16.85q-.125-.125-.125-.25t.125-.25l4.6-4.6q.7-.675 1.663-.688.962-.012 1.662.688l1.15 1.15q.5.5 1.175.487.675-.012 1.175-.487l5.575-5.55h-3.15q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.6q.325 0 .538.212.212.213.212.538V11q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V7.85L14.95 13.4q-.7.675-1.675.687-.975.013-1.65-.662L10.45 12.25q-.5-.5-1.162-.488-.663.013-1.163.488l-4.6 4.6q-.1.1-.237.112-.138.013-.263-.112Z"/>
    </Icon>
  );
});

IconMaterialMovingW100.displayName = 'AmauiIconMaterialMovingW100';

export default IconMaterialMovingW100;
