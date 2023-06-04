import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirplanemodeInactiveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplanemodeInactiveW100'

      short_name='AirplanemodeInactive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.55 15-4.75-1.4-4.95-4.95V3.5q0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6v5.85l8.275 4.875q.1.05.163.162.062.113.062.238 0 .225-.15.325t-.35.05Zm-.75 6.1-7.25-7.25V19l1.825 1.35q.075.05.125.175.05.125.05.225 0 .2-.125.275-.125.075-.325.025l-2.4-.75-2.45.725q-.175.05-.287-.025-.113-.075-.113-.275 0-.1.05-.2t.125-.15l1.825-1.325v-6.4l-8 2.35q-.2.05-.35-.05-.15-.1-.15-.325 0-.125.063-.238.062-.112.162-.162L9.1 10.4 2.9 4.2q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l16.9 16.9q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialAirplanemodeInactiveW100.displayName = 'AmauiIconMaterialAirplanemodeInactiveW100';

export default IconMaterialAirplanemodeInactiveW100;
