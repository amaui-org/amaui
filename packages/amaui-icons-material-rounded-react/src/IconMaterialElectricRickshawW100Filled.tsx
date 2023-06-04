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
      <path d="M6.25 16.5q-1.025 0-1.7-.663-.675-.662-.8-1.537-.3 0-.675-.238Q2.7 13.825 2.7 13V5.8q0-.65.425-1.075Q3.55 4.3 4.2 4.3H15q.45 0 .85.137.4.138.7.513l3.15 4.2q.2.275.25.562.05.288.05.638v1.45q.575.3.938.85.362.55.362 1.35 0 1.025-.738 1.762-.737.738-1.762.738t-1.687-.65q-.663-.65-.813-1.55H8.75q-.125.875-.787 1.537-.663.663-1.713.663ZM3.4 9h4.65V5H4.2q-.35 0-.575.225Q3.4 5.45 3.4 5.8Zm5.35 4.7H15V5H8.75v4h3.3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-3.3Zm6.95-4.05h3.5L15.7 5ZM6.25 15.8q.75 0 1.275-.525.525-.525.525-1.275 0-.75-.525-1.275Q7 12.2 6.25 12.2q-.75 0-1.275.525Q4.45 13.25 4.45 14q0 .75.525 1.275.525.525 1.275.525Zm12.55 0q.75 0 1.275-.525.525-.525.525-1.275 0-.75-.525-1.275-.525-.525-1.275-.525-.75 0-1.275.525Q17 13.25 17 14q0 .75.525 1.275.525.525 1.275.525Zm-5.6 6.75L8.35 20.1h3.2v-1.65l4.85 2.45h-3.2Z"/>
    </Icon>
  );
});

IconMaterialElectricRickshawW100Filled.displayName = 'AmauiIconMaterialElectricRickshawW100Filled';

export default IconMaterialElectricRickshawW100Filled;
