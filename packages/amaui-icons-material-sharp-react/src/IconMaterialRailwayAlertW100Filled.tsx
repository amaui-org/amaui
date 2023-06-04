import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRailwayAlertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RailwayAlertW100Filled'

      short_name='RailwayAlert'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.5 10.2q-1.55 0-2.625-1.075T13.8 6.5q0-1.55 1.075-2.625T17.5 2.8q1.55 0 2.625 1.075T21.2 6.5q0 1.55-1.075 2.625T17.5 10.2ZM17.15 7h.7V4.3h-.7Zm.35 1.8q.2 0 .325-.125t.125-.325q0-.2-.125-.325T17.5 7.9q-.2 0-.325.125t-.125.325q0 .2.125.325t.325.125Zm-7 7.7q.425 0 .713-.288.287-.287.287-.712t-.287-.713q-.288-.287-.713-.287t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288ZM5 20v-.3l1.5-1q-1.325 0-2.012-.875Q3.8 16.95 3.8 16V7q0-1.45 1.538-2.088 1.537-.637 5.037-.637h1.875q-.225.525-.337 1.087-.113.563-.113 1.138 0 .225.012.45.013.225.063.45H4.5v4.9h12v-.175q.175.05.35.063.175.012.35.012v3.85q0 .95-.688 1.8-.687.85-2.012.85l1.5 1v.3Z"/>
    </Icon>
  );
});

IconMaterialRailwayAlertW100Filled.displayName = 'AmauiIconMaterialRailwayAlertW100Filled';

export default IconMaterialRailwayAlertW100Filled;
