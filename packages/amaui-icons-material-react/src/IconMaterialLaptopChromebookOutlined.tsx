import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLaptopChromebookOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopChromebookOutlined'
      short_name='LaptopChromebook'

      {...props}
    >
      <path d="M0 20V18H2V3H22V18H24V20ZM10 18H14V17H10ZM4 15H20V5H4ZM4 15V5V15Z"/>
    </Icon>
  )
});

export default IconMaterialLaptopChromebookOutlined;
