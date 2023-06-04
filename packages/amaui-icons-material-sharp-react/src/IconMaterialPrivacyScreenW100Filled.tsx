import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrivacyScreenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivacyScreenW100Filled'

      short_name='PrivacyScreen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m133 544 236-236H133v236Zm0 280 515-516H407L133 583v241Zm18 20h677V308H687L151 844Z"/>
    </Icon>
  );
});

IconMaterialPrivacyScreenW100Filled.displayName = 'AmauiIconMaterialPrivacyScreenW100Filled';

export default IconMaterialPrivacyScreenW100Filled;
