import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFullCoverageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullCoverageW100'

      short_name='FullCoverage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-172q-26 0-43-17t-17-43v-382q0-6 4-10t10-4q6 0 10 4t4 10v382q0 12 10 22t22 10h502q6 0 10 4t4 10q0 6-4 10t-10 4H192Zm160-160q-26 0-43-17t-17-43v-366q0-13 8.5-21.5T322-788h516q13 0 21.5 8.5T868-758v366q0 26-17 43t-43 17H352Zm0-28h456q12 0 22-10t10-22v-368H320v368q0 12 10 22t22 10Zm62-120h132q6 0 10-4t4-10v-172q0-6-4-10t-10-4H414q-6 0-10 4t-4 10v172q0 6 4 10t10 4Zm226 0h80q17 0 28.5-11.5T760-520q0-17-11.5-28.5T720-560h-80q-17 0-28.5 11.5T600-520q0 17 11.5 28.5T640-480Zm0-120h80q17 0 28.5-11.5T760-640q0-17-11.5-28.5T720-680h-80q-17 0-28.5 11.5T600-640q0 17 11.5 28.5T640-600ZM320-360v-400 400Z"/>
    </Icon>
  );
});

IconMaterialFullCoverageW100.displayName = 'AmauiIconMaterialFullCoverageW100';

export default IconMaterialFullCoverageW100;
