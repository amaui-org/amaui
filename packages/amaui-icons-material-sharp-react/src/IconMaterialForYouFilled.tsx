import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForYouFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForYouFilled'

      short_name='ForYou'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480q81 0 169-16.5T800-540v400q-60 27-146 43.5T480-80q-88 0-174-16.5T160-140v-400q63 27 151 43.5T480-480Zm0-400q66 0 113 47t47 113q0 66-47 113t-113 47q-66 0-113-47t-47-113q0-66 47-113t113-47Z"/>
    </Icon>
  );
});

IconMaterialForYouFilled.displayName = 'AmauiIconMaterialForYouFilled';

export default IconMaterialForYouFilled;
