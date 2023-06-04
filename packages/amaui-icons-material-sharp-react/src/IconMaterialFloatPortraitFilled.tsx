import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFloatPortraitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloatPortraitFilled'

      short_name='FloatPortrait'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M600 976V696h200v280H600Zm-440 0V176h640v440H520v360H160Z"/>
    </Icon>
  );
});

IconMaterialFloatPortraitFilled.displayName = 'AmauiIconMaterialFloatPortraitFilled';

export default IconMaterialFloatPortraitFilled;
