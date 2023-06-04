import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsMartialArts = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsMartialArts'

      short_name='SportsMartialArts'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="19.8,2 11.6,8.7 10.39,7.66 13.99,5.58 9.41,1 8,2.41 10.74,5.15 5,8.46 3.81,12.75 6.27,17 8,16 5.97,12.48 6.32,11.18 9.5,13 10,22 12,22 12.5,12 21,3.4"/><circle cx="5" cy="5" r="2"/></g></g>
    </Icon>
  );
});

IconMaterialSportsMartialArts.displayName = 'AmauiIconMaterialSportsMartialArts';

export default IconMaterialSportsMartialArts;
