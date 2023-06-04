import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNewReleasesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewReleasesFilled'

      short_name='NewReleases'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.6 22.5-1.9-3.2-3.6-.8.35-3.7L1 12l2.45-2.8-.35-3.7 3.6-.8 1.9-3.2L12 2.95l3.4-1.45 1.9 3.2 3.6.8-.35 3.7L23 12l-2.45 2.8.35 3.7-3.6.8-1.9 3.2-3.4-1.45Zm2.35-6.95L16.6 9.9l-1.4-1.45-4.25 4.25-2.15-2.1L7.4 12Z"/>
    </Icon>
  );
});

IconMaterialNewReleasesFilled.displayName = 'AmauiIconMaterialNewReleasesFilled';

export default IconMaterialNewReleasesFilled;
