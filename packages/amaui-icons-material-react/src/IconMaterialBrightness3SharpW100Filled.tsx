import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightness3SharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness3SharpW100Filled'
      short_name='Brightness3'

      {...props}
    >
      <path d="M9.25 20.7Q9.15 20.7 9.075 20.7Q9 20.7 8.9 20.7Q11.2 19.325 12.488 17Q13.775 14.675 13.775 12Q13.775 9.325 12.488 7Q11.2 4.675 8.9 3.3Q9 3.3 9.075 3.3Q9.15 3.3 9.25 3.3Q11.05 3.3 12.638 3.987Q14.225 4.675 15.4 5.85Q16.575 7.025 17.262 8.612Q17.95 10.2 17.95 12Q17.95 13.8 17.262 15.387Q16.575 16.975 15.4 18.15Q14.225 19.325 12.638 20.012Q11.05 20.7 9.25 20.7Z"/>
    </Icon>
  );
});

IconMaterialBrightness3SharpW100Filled.displayName = 'AmauiIconMaterialBrightness3SharpW100Filled';

export default IconMaterialBrightness3SharpW100Filled;
