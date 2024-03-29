import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSsidChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SsidChart'

      short_name='SsidChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.025 11.675q-.175-.025-.337-.088-.163-.062-.288-.187L7.625 7.625 4.575 9.85q-.5.35-1.037.075Q3 9.65 3 9.025q0-.25.1-.45t.3-.35L7.125 5.5q.15-.125.325-.162.175-.038.35-.013t.338.087q.162.063.287.188L12.2 9.375l7.225-5.225q.5-.35 1.037-.075.538.275.538.9 0 .25-.112.45-.113.2-.313.35L12.7 11.5q-.15.125-.325.162-.175.038-.35.013Zm0 9q-.175 0-.35-.075t-.3-.2L5.8 15l-1.225.875q-.5.35-1.037.075Q3 15.675 3 15.05q0-.25.112-.463.113-.212.313-.337l1.9-1.375q.15-.125.313-.163.162-.037.337-.012.175.025.337.087.163.063.288.188l5.525 5.375 3.9-3.125q.125-.125.287-.175.163-.05.338-.05H20q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 17 20 17h-3l-4.325 3.45q-.15.125-.312.175-.163.05-.338.05Z"/>
    </Icon>
  );
});

IconMaterialSsidChart.displayName = 'AmauiIconMaterialSsidChart';

export default IconMaterialSsidChart;
