import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLabelRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelRoundedW100'
      short_name='Label'

      {...props}
    >
      <path d="M5.95 17.7Q5.325 17.7 4.888 17.262Q4.45 16.825 4.45 16.2V7.8Q4.45 7.175 4.888 6.738Q5.325 6.3 5.95 6.3H14.35Q14.9 6.3 15.387 6.55Q15.875 6.8 16.2 7.25L18.925 11.125Q19.2 11.525 19.2 12Q19.2 12.475 18.925 12.875L16.2 16.7Q15.85 17.15 15.388 17.425Q14.925 17.7 14.35 17.7ZM18.7 12 15.6 7.65Q15.4 7.375 15.062 7.188Q14.725 7 14.35 7H5.95Q5.65 7 5.4 7.25Q5.15 7.5 5.15 7.8V16.2Q5.15 16.5 5.4 16.75Q5.65 17 5.95 17H14.35Q14.725 17 15.062 16.812Q15.4 16.625 15.6 16.35ZM5.15 12V16.35Q5.15 16.625 5.15 16.812Q5.15 17 5.15 17Q5.15 17 5.15 16.75Q5.15 16.5 5.15 16.2V7.8Q5.15 7.5 5.15 7.25Q5.15 7 5.15 7Q5.15 7 5.15 7.188Q5.15 7.375 5.15 7.65Z"/>
    </Icon>
  );
});

IconMaterialLabelRoundedW100.displayName = 'AmauiIconMaterialLabelRoundedW100';

export default IconMaterialLabelRoundedW100;
