import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLabelRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelRoundedW100Filled'
      short_name='Label'

      {...props}
    >
      <path d="M5.95 17.7Q5.325 17.7 4.888 17.262Q4.45 16.825 4.45 16.2V7.8Q4.45 7.175 4.888 6.738Q5.325 6.3 5.95 6.3H14.35Q14.9 6.3 15.387 6.55Q15.875 6.8 16.2 7.25L18.925 11.125Q19.2 11.525 19.2 12Q19.2 12.475 18.925 12.875L16.2 16.7Q15.85 17.15 15.388 17.425Q14.925 17.7 14.35 17.7Z"/>
    </Icon>
  );
});

IconMaterialLabelRoundedW100Filled.displayName = 'AmauiIconMaterialLabelRoundedW100Filled';

export default IconMaterialLabelRoundedW100Filled;
