import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLabelOffSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelOffSharpW700'
      short_name='LabelOff'

      {...props}
    >
      <path d="M19.25 15.875 17 13.625 18.175 12 14.85 7.3H10.7L7.55 4.15H16.475L22.025 12ZM19.85 23.175 16.5 19.85H2.15V5.5L0.325 3.675L2 2L21.5 21.5ZM9.3 12.675ZM13.85 10.45ZM13.325 16.7 5.3 8.65V16.7Z"/>
    </Icon>
  )
});

export default IconMaterialLabelOffSharpW700;
