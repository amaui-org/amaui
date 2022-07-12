import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCompareSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompareSharpW700Filled'
      short_name='Compare'

      {...props}
    >
      <path d="M9.625 23.775V21.85H2.15V2.15H9.625V0.225H12V23.775ZM5.275 17.7H9.625V12.45ZM14.375 21.85V12.45L18.7 17.625V5.3H14.375V2.15H21.85V21.85Z"/>
    </Icon>
  )
});

export default IconMaterialCompareSharpW700Filled;
