import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTvGuide = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvGuide'

      short_name='TvGuide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Zm120-120h80v-240h70l90 240h80l120-320H660l-60 180-60-180H200v80h120v240Z"/>
    </Icon>
  );
});

IconMaterialTvGuide.displayName = 'AmauiIconMaterialTvGuide';

export default IconMaterialTvGuide;
