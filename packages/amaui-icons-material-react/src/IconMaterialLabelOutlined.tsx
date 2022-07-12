import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLabelOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelOutlined'
      short_name='Label'

      {...props}
    >
      <path d="M21 12 16.65 18.15Q16.375 18.55 15.938 18.775Q15.5 19 15 19H5Q4.175 19 3.587 18.413Q3 17.825 3 17V7Q3 6.175 3.587 5.588Q4.175 5 5 5H15Q15.5 5 15.938 5.225Q16.375 5.45 16.65 5.85ZM18.55 12 15 7Q15 7 15 7Q15 7 15 7H5Q5 7 5 7Q5 7 5 7V17Q5 17 5 17Q5 17 5 17H15Q15 17 15 17Q15 17 15 17ZM5 12V17Q5 17 5 17Q5 17 5 17Q5 17 5 17Q5 17 5 17V7Q5 7 5 7Q5 7 5 7Q5 7 5 7Q5 7 5 7Z"/>
    </Icon>
  )
});

export default IconMaterialLabelOutlined;
