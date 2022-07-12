import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSimCardSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCardSharpW700Filled'
      short_name='SimCard'

      {...props}
    >
      <path d="M7.225 18.775H9.225V16.775H7.225ZM14.775 18.775H16.775V16.775H14.775ZM7.225 14.775H9.225V10.775H7.225ZM11 18.775H13V14.775H11ZM11 12.775H13V10.775H11ZM14.775 14.775H16.775V10.775H14.775ZM3.15 22.85V7.65L9.65 1.15H20.85V22.85Z"/>
    </Icon>
  )
});

export default IconMaterialSimCardSharpW700Filled;
