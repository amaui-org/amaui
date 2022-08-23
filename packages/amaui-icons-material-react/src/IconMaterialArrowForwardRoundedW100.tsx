import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowForwardRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForwardRoundedW100'
      short_name='ArrowForward'

      {...props}
    >
      <path d="M11.75 18.75Q11.625 18.625 11.625 18.5Q11.625 18.375 11.75 18.25L17.65 12.35H5.35Q5.2 12.35 5.1 12.25Q5 12.15 5 12Q5 11.85 5.1 11.75Q5.2 11.65 5.35 11.65H17.65L11.75 5.75Q11.625 5.625 11.625 5.5Q11.625 5.375 11.75 5.25Q11.875 5.125 12 5.125Q12.125 5.125 12.25 5.25L18.475 11.475Q18.6 11.6 18.65 11.725Q18.7 11.85 18.7 12Q18.7 12.125 18.65 12.262Q18.6 12.4 18.475 12.525L12.25 18.75Q12.125 18.875 12 18.875Q11.875 18.875 11.75 18.75Z"/>
    </Icon>
  );
});

IconMaterialArrowForwardRoundedW100.displayName = 'AmauiIconMaterialArrowForwardRoundedW100';

export default IconMaterialArrowForwardRoundedW100;
