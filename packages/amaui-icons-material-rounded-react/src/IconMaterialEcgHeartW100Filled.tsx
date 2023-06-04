import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEcgHeartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EcgHeartW100Filled'

      short_name='EcgHeart'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M655 264q72 0 122.5 56T828 456q0 20-3.5 40T813 536H621l-68-102q-5-8-14-13t-19-5q-13 0-23.5 8T482 444l-54 162-35-52q-5-8-14-13t-19-5H147q-8-19-11.5-39t-3.5-40q0-81 50-137t122-56q39 0 75.5 16t65.5 47l35 37 33-35q30-32 67-48.5t75-16.5ZM480 885q-7 0-14.5-3t-12.5-9L205 624l-4-4-4-4h141l68 102q5 8 14 13t19 5q13 0 24-8t15-20l54-162 34 52q6 8 15 13t19 5h163l-4 4-4 4-249 249q-6 6-12.5 9t-13.5 3Z"/>
    </Icon>
  );
});

IconMaterialEcgHeartW100Filled.displayName = 'AmauiIconMaterialEcgHeartW100Filled';

export default IconMaterialEcgHeartW100Filled;
