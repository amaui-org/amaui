import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardReturnRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardReturnRoundedW100Filled'
      short_name='KeyboardReturn'

      {...props}
    >
      <path d="M8.625 16.85 4.3 12.525Q4.175 12.4 4.125 12.262Q4.075 12.125 4.075 12Q4.075 11.85 4.125 11.725Q4.175 11.6 4.3 11.475L8.625 7.15Q8.75 7.025 8.875 7.025Q9 7.025 9.125 7.15Q9.25 7.275 9.25 7.4Q9.25 7.525 9.125 7.65L5.125 11.65H19.525V8Q19.525 7.85 19.625 7.75Q19.725 7.65 19.875 7.65Q20.025 7.65 20.125 7.75Q20.225 7.85 20.225 8V11.65Q20.225 11.95 20.025 12.15Q19.825 12.35 19.525 12.35H5.125L9.125 16.35Q9.25 16.475 9.25 16.6Q9.25 16.725 9.125 16.85Q9 16.975 8.875 16.975Q8.75 16.975 8.625 16.85Z"/>
    </Icon>
  );
});

IconMaterialKeyboardReturnRoundedW100Filled.displayName = 'AmauiIconMaterialKeyboardReturnRoundedW100Filled';

export default IconMaterialKeyboardReturnRoundedW100Filled;
