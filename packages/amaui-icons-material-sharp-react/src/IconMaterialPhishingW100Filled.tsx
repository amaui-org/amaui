import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhishingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhishingW100Filled'

      short_name='Phishing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 20.35q-2.225 0-3.787-1.562Q5.65 17.225 5.65 15v-4.425L9.075 14l-.475.475-2.25-2.25V15q0 1.925 1.363 3.288Q9.075 19.65 11 19.65q1.925 0 3.288-1.362Q15.65 16.925 15.65 15v-3.675q-.875-.125-1.437-.775Q13.65 9.9 13.65 9t.563-1.55q.562-.65 1.437-.775V2.65h.7v4.025q.875.125 1.438.775.562.65.562 1.55t-.562 1.55q-.563.65-1.438.775V15q0 2.225-1.562 3.788Q13.225 20.35 11 20.35Z"/>
    </Icon>
  );
});

IconMaterialPhishingW100Filled.displayName = 'AmauiIconMaterialPhishingW100Filled';

export default IconMaterialPhishingW100Filled;
