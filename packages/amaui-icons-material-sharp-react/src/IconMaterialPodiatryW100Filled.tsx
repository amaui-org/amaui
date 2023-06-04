import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPodiatryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PodiatryW100Filled'

      short_name='Podiatry'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m692 674 139-139 20 20-139 139-20-20ZM131 833V727q37-16 72-33.5t66-42.5l40 46 29-29-40-44q5-5 10.5-9.5T319 605l39 43 29-29-49-52q5-5 9-11t7-13l53 56 26-26-65-68 40-72 170-150 210 210-339 340H131Z"/>
    </Icon>
  );
});

IconMaterialPodiatryW100Filled.displayName = 'AmauiIconMaterialPodiatryW100Filled';

export default IconMaterialPodiatryW100Filled;
