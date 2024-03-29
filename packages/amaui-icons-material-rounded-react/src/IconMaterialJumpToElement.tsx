import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialJumpToElement = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JumpToElement'

      short_name='JumpToElement'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M520 536h40q17 0 28.5 11.5T600 576q0 17-11.5 28.5T560 616h-80q-17 0-28.5-11.5T440 576v-80q0-17 11.5-28.5T480 456q17 0 28.5 11.5T520 496v40Zm280 0v-40q0-17 11.5-28.5T840 456q17 0 28.5 11.5T880 496v80q0 17-11.5 28.5T840 616h-80q-17 0-28.5-11.5T720 576q0-17 11.5-28.5T760 536h40ZM520 256v40q0 17-11.5 28.5T480 336q-17 0-28.5-11.5T440 296v-80q0-17 11.5-28.5T480 176h80q17 0 28.5 11.5T600 216q0 17-11.5 28.5T560 256h-40Zm280 0h-40q-17 0-28.5-11.5T720 216q0-17 11.5-28.5T760 176h80q17 0 28.5 11.5T880 216v80q0 17-11.5 28.5T840 336q-17 0-28.5-11.5T800 296v-40ZM360 752 164 948q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196H160q-17 0-28.5-11.5T120 656q0-17 11.5-28.5T160 616h240q17 0 28.5 11.5T440 656v240q0 17-11.5 28.5T400 936q-17 0-28.5-11.5T360 896V752Z"/>
    </Icon>
  );
});

IconMaterialJumpToElement.displayName = 'AmauiIconMaterialJumpToElement';

export default IconMaterialJumpToElement;
