import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChartDataW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChartDataW100'

      short_name='ChartData'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.45 12.05 1.475 1.475q.2.225.513.225.312 0 .537-.225l3.675-3.65v2.15q0 .125.1.225t.25.1q.125 0 .238-.1.112-.1.112-.25V9.4q0-.3-.225-.525-.225-.225-.525-.225h-2.625q-.125 0-.225.112-.1.113-.1.238 0 .15.1.25t.25.1h2.125l-3.675 3.725-1.475-1.475q-.225-.225-.537-.225-.313 0-.513.225L7.15 14.35q-.1.125-.1.263 0 .137.1.237.125.125.263.125.137 0 .237-.125ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h12.4q.3 0 .55-.25.25-.25.25-.55V5.8q0-.3-.25-.55Q18.5 5 18.2 5H5.8q-.3 0-.55.25Q5 5.5 5 5.8v12.4q0 .3.25.55.25.25.55.25ZM5 5v14V5Z"/>
    </Icon>
  );
});

IconMaterialChartDataW100.displayName = 'AmauiIconMaterialChartDataW100';

export default IconMaterialChartDataW100;
