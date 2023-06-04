import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoubleArrowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoubleArrowW100Filled'

      short_name='DoubleArrow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.825 18.35q-.2 0-.313-.175-.112-.175.013-.35L17.7 12l-4.175-5.825q-.125-.175-.013-.35.113-.175.313-.175.125 0 .188.037.062.038.112.138l4.1 5.75q.075.1.1.2.025.1.025.225t-.025.225q-.025.1-.1.2l-4.1 5.75q-.05.1-.112.137-.063.038-.188.038Zm-5.75 0q-.2 0-.312-.175-.113-.175.012-.35L11.95 12 7.775 6.175Q7.65 6 7.763 5.825q.112-.175.312-.175.125 0 .175.037.05.038.125.138l4.1 5.75q.075.1.1.2.025.1.025.225t-.025.225q-.025.1-.1.2l-4.1 5.75q-.05.1-.112.137-.063.038-.188.038Z"/>
    </Icon>
  );
});

IconMaterialDoubleArrowW100Filled.displayName = 'AmauiIconMaterialDoubleArrowW100Filled';

export default IconMaterialDoubleArrowW100Filled;
