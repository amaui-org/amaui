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
      <path d="m133 544 236-236H193q-25 0-42.5 17.5T133 368v176Zm0 280 515-516H407L133 583v241Zm18 20h617q25 0 42.5-17.5T828 784V368q0-25-17.5-42.5T768 308h-81L151 844Z"/>
    </Icon>
  );
});

IconMaterialPrivacyScreenW100Filled.displayName = 'AmauiIconMaterialPrivacyScreenW100Filled';

export default IconMaterialPrivacyScreenW100Filled;
