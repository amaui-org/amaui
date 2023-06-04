import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNewReleasesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewReleasesW100Filled'

      short_name='NewReleases'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.15 20.85-1.6-2.7-3.05-.65.3-3.15L2.75 12 4.8 9.65 4.5 6.5l3.05-.65 1.6-2.7L12 4.35l2.85-1.2 1.6 2.7 3.05.65-.3 3.15L21.25 12l-2.05 2.35.3 3.15-3.05.65-1.6 2.7-2.85-1.2Zm1.8-6.2L15.7 9.9l-.5-.5-4.25 4.25L8.8 11.5l-.5.5Z"/>
    </Icon>
  );
});

IconMaterialNewReleasesW100Filled.displayName = 'AmauiIconMaterialNewReleasesW100Filled';

export default IconMaterialNewReleasesW100Filled;
