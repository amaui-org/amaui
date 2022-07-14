import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightnessMediumSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessMediumSharpFilled'
      short_name='BrightnessMedium'

      {...props}
    >
      <path d="M12 23.3 8.65 20H4V15.35L0.7 12L4 8.65V4H8.65L12 0.7L15.35 4H20V8.65L23.3 12L20 15.35V20H15.35ZM12 17Q14.075 17 15.538 15.537Q17 14.075 17 12Q17 9.925 15.538 8.462Q14.075 7 12 7Z"/>
    </Icon>
  );
});

export default IconMaterialBrightnessMediumSharpFilled;
