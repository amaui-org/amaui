import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLabelRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelRoundedFilled'
      short_name='Label'

      {...props}
    >
      <path d="M5 19Q4.175 19 3.587 18.413Q3 17.825 3 17V7Q3 6.175 3.587 5.588Q4.175 5 5 5H15Q15.5 5 15.938 5.225Q16.375 5.45 16.65 5.85L20.175 10.85Q20.55 11.375 20.55 12Q20.55 12.625 20.175 13.15L16.65 18.15Q16.375 18.55 15.938 18.775Q15.5 19 15 19Z"/>
    </Icon>
  );
});

IconMaterialLabelRoundedFilled.displayName = 'AmauiIconMaterialLabelRoundedFilled';

export default IconMaterialLabelRoundedFilled;
