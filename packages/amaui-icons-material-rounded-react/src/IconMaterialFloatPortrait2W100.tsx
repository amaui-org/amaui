import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFloatPortrait2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloatPortrait2W100'

      short_name='FloatPortrait2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M370-500h180q13 0 21.5-8.5T580-530v-140q0-13-8.5-21.5T550-700H370q-13 0-21.5 8.5T340-670v140q0 13 8.5 21.5T370-500Zm378 308q0 26-17 43t-43 17H272q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h416q26 0 43 17t17 43v576Zm-28 0v-576q0-12-10-22t-22-10H272q-12 0-22 10t-10 22v576q0 12 10 22t22 10h416q12 0 22-10t10-22Zm0-608H240h480Z"/>
    </Icon>
  );
});

IconMaterialFloatPortrait2W100.displayName = 'AmauiIconMaterialFloatPortrait2W100';

export default IconMaterialFloatPortrait2W100;
