import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnfloatPortraitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfloatPortraitFilled'

      short_name='UnfloatPortrait'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m523 596 57-57-123-123h103v-80H320v240h80V472l123 124Zm77 380V696h200v280H600Zm-440 0V176h640v440H520v360H160Z"/>
    </Icon>
  );
});

IconMaterialUnfloatPortraitFilled.displayName = 'AmauiIconMaterialUnfloatPortraitFilled';

export default IconMaterialUnfloatPortraitFilled;
