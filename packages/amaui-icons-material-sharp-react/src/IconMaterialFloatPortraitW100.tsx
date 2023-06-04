import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFloatPortraitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloatPortraitW100'

      short_name='FloatPortrait'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M212 924V228h536v376h-28V256H240v640h268v28H212Zm396 0V704h140v220H608ZM480 576Z"/>
    </Icon>
  );
});

IconMaterialFloatPortraitW100.displayName = 'AmauiIconMaterialFloatPortraitW100';

export default IconMaterialFloatPortraitW100;
