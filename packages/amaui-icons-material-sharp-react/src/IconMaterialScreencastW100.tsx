import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreencastW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreencastW100'

      short_name='Screencast'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 844V308h696v536H132Zm428-134v-28h140v28H560Zm0-120v-28h140v28H560Zm-400-70v296h640V470H560v-28h240V336H460v184H160Z"/>
    </Icon>
  );
});

IconMaterialScreencastW100.displayName = 'AmauiIconMaterialScreencastW100';

export default IconMaterialScreencastW100;
