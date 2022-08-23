import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightness4SharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness4SharpFilled'
      short_name='Brightness4'

      {...props}
    >
      <path d="M12.3 17Q14.375 17 15.838 15.537Q17.3 14.075 17.3 12Q17.3 9.925 15.838 8.462Q14.375 7 12.3 7Q11.75 7 11.225 7.112Q10.7 7.225 10.2 7.45Q11.55 8.075 12.338 9.3Q13.125 10.525 13.125 12Q13.125 13.475 12.338 14.7Q11.55 15.925 10.2 16.55Q10.7 16.775 11.225 16.887Q11.75 17 12.3 17ZM12 23.3 8.65 20H4V15.35L0.7 12L4 8.65V4H8.65L12 0.7L15.35 4H20V8.65L23.3 12L20 15.35V20H15.35Z"/>
    </Icon>
  );
});

IconMaterialBrightness4SharpFilled.displayName = 'AmauiIconMaterialBrightness4SharpFilled';

export default IconMaterialBrightness4SharpFilled;
