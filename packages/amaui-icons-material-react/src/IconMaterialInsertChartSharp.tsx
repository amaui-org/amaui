import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInsertChartSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InsertChartSharp'
      short_name='InsertChart'

      {...props}
    >
      <path d="M7 17H9V10H7ZM11 17H13V7H11ZM15 17H17V13H15ZM3 21V3H21V21ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

export default IconMaterialInsertChartSharp;
