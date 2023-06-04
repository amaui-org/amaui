import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFertileW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FertileW100'

      short_name='Fertile'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M506 285q32 40 61.5 82t57.5 85l155-116q7-5 15-6t16 3.25q8 3.75 12.5 11.169 4.5 7.42 4.5 15.581v216q0 72.21-27.391 135.72-27.392 63.51-74.348 110.49-46.957 46.98-110.435 74.385Q552.348 924 480.174 924 408 924 344.442 896.595q-63.559-27.405-110.575-74.385-47.015-46.98-74.441-110.49Q132 648.21 132 576V359.923q0-7.923 4.5-15.423t12.5-11.25q8-4.25 16-3.25t15 6l154 116q28-43 58.5-84.5T455 286q5-6 11-9.5t14-3.5q8 0 14.632 3.12 6.631 3.12 11.368 8.88Zm-26 611q134 0 227-93t93-227V356L616 494q-45-72-73-114t-63-84q-35 43-65 87t-71 111L160 356v220q0 134 93 227t227 93Zm0-300Z"/>
    </Icon>
  );
});

IconMaterialFertileW100.displayName = 'AmauiIconMaterialFertileW100';

export default IconMaterialFertileW100;
