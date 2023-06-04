import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElectricRickshawW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricRickshawW100Filled'

      short_name='ElectricRickshaw'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.25 16.5q-1.025 0-1.7-.663-.675-.662-.8-1.537H2.7v-10h13.375L20 9.55v2.25q.575.3.938.85.362.55.362 1.35 0 1.025-.738 1.762-.737.738-1.762.738t-1.687-.65q-.663-.65-.813-1.55H8.75q-.125.875-.787 1.537-.663.663-1.713.663ZM3.4 9h4.65V5H3.4Zm5.35 4.7H15V5H8.75v4h3.65v.7H8.75Zm6.95-4.05h3.5L15.7 5ZM6.25 15.8q.75 0 1.275-.525.525-.525.525-1.275 0-.75-.525-1.275Q7 12.2 6.25 12.2q-.75 0-1.275.525Q4.45 13.25 4.45 14q0 .75.525 1.275.525.525 1.275.525Zm12.55 0q.75 0 1.275-.525.525-.525.525-1.275 0-.75-.525-1.275-.525-.525-1.275-.525-.75 0-1.275.525Q17 13.25 17 14q0 .75.525 1.275.525.525 1.275.525Zm-5.6 6.75L8.35 20.1h3.2v-1.65l4.85 2.45h-3.2Z"/>
    </Icon>
  );
});

IconMaterialElectricRickshawW100Filled.displayName = 'AmauiIconMaterialElectricRickshawW100Filled';

export default IconMaterialElectricRickshawW100Filled;
