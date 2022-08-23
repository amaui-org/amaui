import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardBackspaceRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardBackspaceRoundedW100'
      short_name='KeyboardBackspace'

      {...props}
    >
      <path d="M8.625 16.85 4.3 12.525Q4.175 12.4 4.125 12.275Q4.075 12.15 4.075 12Q4.075 11.85 4.125 11.725Q4.175 11.6 4.3 11.475L8.65 7.125Q8.75 7.025 8.875 7.025Q9 7.025 9.125 7.15Q9.25 7.275 9.25 7.4Q9.25 7.525 9.125 7.65L5.125 11.65H19.875Q20.025 11.65 20.125 11.75Q20.225 11.85 20.225 12Q20.225 12.15 20.125 12.25Q20.025 12.35 19.875 12.35H5.125L9.15 16.375Q9.25 16.475 9.25 16.6Q9.25 16.725 9.125 16.85Q9 16.975 8.875 16.975Q8.75 16.975 8.625 16.85Z"/>
    </Icon>
  );
});

IconMaterialKeyboardBackspaceRoundedW100.displayName = 'AmauiIconMaterialKeyboardBackspaceRoundedW100';

export default IconMaterialKeyboardBackspaceRoundedW100;
