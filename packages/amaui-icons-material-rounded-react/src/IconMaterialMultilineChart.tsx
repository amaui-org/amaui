import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMultilineChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MultilineChart'

      short_name='MultilineChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.475 12.35 4.1 17.725q-.3.3-.712.287-.413-.012-.713-.312-.275-.3-.287-.7-.013-.4.287-.7l6.1-6.1q.3-.3.7-.3.4 0 .7.3l3.3 3.3 2.9-3.25q-1.275-1.5-3-2.375T9.575 7q-1.5 0-2.875.475t-2.525 1.35q-.375.275-.812.262-.438-.012-.688-.362-.275-.375-.187-.813.087-.437.462-.712 1.425-1.05 3.1-1.625T9.575 5q2.45 0 4.525.987 2.075.988 3.625 2.763l2.125-2.425q.3-.35.738-.338.437.013.737.288.275.275.288.675.012.4-.263.7l-2.375 2.7q.7 1.1 1.163 2.35.462 1.25.687 2.65.075.45-.175.8-.25.35-.75.35-.475 0-.725-.25t-.375-.775q-.2-.95-.512-1.838-.313-.887-.763-1.687l-3.25 3.65q-.275.325-.713.338-.437.012-.737-.288Z"/>
    </Icon>
  );
});

IconMaterialMultilineChart.displayName = 'AmauiIconMaterialMultilineChart';

export default IconMaterialMultilineChart;
