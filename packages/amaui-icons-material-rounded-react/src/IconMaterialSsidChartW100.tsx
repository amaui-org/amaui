import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSsidChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SsidChartW100'

      short_name='SsidChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.1 10.925q-.125-.025-.25-.075-.125-.05-.225-.15L7.7 6.775 4.85 8.85q-.175.125-.363.037Q4.3 8.8 4.3 8.575q0-.075.05-.15t.1-.125l2.775-2.075q.125-.075.25-.113.125-.037.25-.012.125.025.25.062.125.038.225.138l3.925 3.925L19.15 5.15q.175-.125.363-.025.187.1.187.325 0 .1-.037.163-.038.062-.113.112l-6.95 5.05q-.125.075-.25.125t-.25.025Zm-.05 8.95q-.125 0-.25-.05t-.225-.15l-5.7-5.525-1.025.75q-.175.125-.363.025-.187-.1-.187-.325 0-.075.038-.15.037-.075.112-.125l.975-.7q.125-.075.238-.113.112-.037.237-.037.125 0 .25.062.125.063.225.163l5.7 5.525 4.25-3.4q.1-.075.225-.125t.25-.05h2.55q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-2.575l-4.2 3.375q-.125.1-.263.125-.137.025-.262.025Z"/>
    </Icon>
  );
});

IconMaterialSsidChartW100.displayName = 'AmauiIconMaterialSsidChartW100';

export default IconMaterialSsidChartW100;
