import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPodiatryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PodiatryW100'

      short_name='Podiatry'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m692 674 139-139 20 20-139 139-20-20ZM131 833V727q37-16 72-33.5t66-42.5l40 46 29-29-40-44q5-5 10.5-9.5T319 605l39 43 29-29-49-52q5-5 9-11t7-13l53 56 26-26-65-68 40-72 170-150 210 210-339 340H131Zm307-28 310-312-310 312Zm-279 0h279l310-312-171-171-146 128-27 50 69 72-165 165-42-49q-24 19-51.5 32.5T159 746v59Z"/>
    </Icon>
  );
});

IconMaterialPodiatryW100.displayName = 'AmauiIconMaterialPodiatryW100';

export default IconMaterialPodiatryW100;
