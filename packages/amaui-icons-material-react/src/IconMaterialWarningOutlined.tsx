import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWarningOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WarningOutlined'
      short_name='Warning'

      {...props}
    >
      <path d="M12 12.5ZM1 21 12 2 23 21ZM11 15H13V10H11ZM12 18Q12.425 18 12.713 17.712Q13 17.425 13 17Q13 16.575 12.713 16.288Q12.425 16 12 16Q11.575 16 11.288 16.288Q11 16.575 11 17Q11 17.425 11.288 17.712Q11.575 18 12 18ZM4.45 19H19.55L12 6Z"/>
    </Icon>
  )
});

export default IconMaterialWarningOutlined;
