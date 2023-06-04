import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStreamAppsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StreamAppsW100'

      short_name='StreamApps'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M594 652h234V480H594v172Zm25 28-27 27q-7 7-16.5 3.5T566 697V482q0-13 8.5-21.5T596 452h230q13 0 21.5 8.5T856 482v168q0 13-8.5 21.5T826 680H619ZM312 964q-25 0-42.5-17.5T252 904V248q0-25 17.5-42.5T312 188h336q25 0 42.5 17.5T708 248v124h-28v-62H280v532h400v-62h28v124q0 25-17.5 42.5T648 964H312Zm-32-94v34q0 12 10 22t22 10h336q12 0 22-10t10-22v-34H280Zm0-588h400v-34q0-12-10-22t-22-10H312q-12 0-22 10t-10 22v34Zm0 0v-66 66Zm0 588v66-66Zm314-218V480v172Z"/>
    </Icon>
  );
});

IconMaterialStreamAppsW100.displayName = 'AmauiIconMaterialStreamAppsW100';

export default IconMaterialStreamAppsW100;
