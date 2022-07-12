import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLabelImportantOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelImportantOutlined'
      short_name='LabelImportant'

      {...props}
    >
      <path d="M3 19 7.5 12 3 5H15Q15.5 5 15.938 5.225Q16.375 5.45 16.65 5.85L21 12L16.65 18.15Q16.375 18.55 15.938 18.775Q15.5 19 15 19ZM6.65 17H15Q15 17 15 17Q15 17 15 17L18.55 12L15 7Q15 7 15 7Q15 7 15 7H6.65L9.9 12ZM9.9 12 6.65 7Q6.65 7 6.65 7Q6.65 7 6.65 7L9.9 12L6.65 17Q6.65 17 6.65 17Q6.65 17 6.65 17Z"/>
    </Icon>
  )
});

export default IconMaterialLabelImportantOutlined;
