import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightness4OutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness4OutlinedFilled'
      short_name='Brightness4'

      {...props}
    >
      <path d="M12 23.3 8.65 20H4V15.35L0.7 12L4 8.65V4H8.65L12 0.7L15.35 4H20V8.65L23.3 12L20 15.35V20H15.35ZM12 18Q14.5 18 16.25 16.25Q18 14.5 18 12Q18 9.5 16.25 7.75Q14.5 6 12 6Q11.35 6 10.7 6.125Q10.05 6.25 9.475 6.525Q11.075 7.275 12.038 8.762Q13 10.25 13 12Q13 13.75 12.038 15.238Q11.075 16.725 9.475 17.475Q10.05 17.75 10.7 17.875Q11.35 18 12 18Z"/>
    </Icon>
  )
});

export default IconMaterialBrightness4OutlinedFilled;
