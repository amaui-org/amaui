import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnfloatPortraitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfloatPortraitW100'

      short_name='UnfloatPortrait'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M212 924V228h536v376h-28V256H240v640h268v28H212Zm342-374L368 364h140v-28H320v188h28V383l186 187 20-20Zm54 374V704h140v220H608ZM480 576Z"/>
    </Icon>
  );
});

IconMaterialUnfloatPortraitW100.displayName = 'AmauiIconMaterialUnfloatPortraitW100';

export default IconMaterialUnfloatPortraitW100;
