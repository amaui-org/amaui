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
      <path d="M10.5 16.5q.425 0 .713-.288.287-.287.287-.712t-.287-.713q-.288-.287-.713-.287t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm7-6.3q-1.55 0-2.625-1.075T13.8 6.5q0-1.55 1.075-2.625T17.5 2.8q1.55 0 2.625 1.075T21.2 6.5q0 1.55-1.075 2.625T17.5 10.2Zm0-3.2q.15 0 .25-.1t.1-.25v-2q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2q0 .15.1.25t.25.1Zm0 1.8q.2 0 .325-.125t.125-.325q0-.2-.125-.325T17.5 7.9q-.2 0-.325.125t-.125.325q0 .2.125.325t.325.125ZM5.5 20q-.125 0-.188-.062-.062-.063-.062-.213 0-.05.037-.15.038-.1.113-.15l1.1-.725q-1.325 0-2.012-.875Q3.8 16.95 3.8 16V7q0-1.45 1.538-2.088 1.537-.637 5.037-.637H12.225q-.3.7-.387 1.55-.088.85.037 1.575H4.5v4.9h12v-.175q.175.05.35.063.175.012.35.012v3.85q0 .95-.688 1.8-.687.85-2.012.85l1.075.75q.05.05.113.137.062.088.062.163 0 .1-.075.175Q15.6 20 15.5 20Z"/>
    </Icon>
  );
});

IconMaterialRailwayAlertW100Filled.displayName = 'AmauiIconMaterialRailwayAlertW100Filled';

export default IconMaterialRailwayAlertW100Filled;
