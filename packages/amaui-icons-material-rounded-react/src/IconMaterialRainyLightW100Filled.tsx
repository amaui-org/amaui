import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRainyLightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RainyLightW100Filled'

      short_name='RainyLight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-508q-5 2-10.5.5T168-514L68-714q-2-5-.5-10.5T74-732q5-2 10.5-.5T92-726l100 200q2 5 .5 10.5T186-508Zm140 280q-5 3-10.5 1t-8.5-7l-80-160q-2-5 0-10.5t7-8.5q5-2 10.5 0t7.5 7l81 160q2 5 0 10t-7 8Zm82-200q-5 2-11 .5t-8-6.5L249-714q-2-5-.5-10.5t6.5-7.5q5-3 11-1t8 7l140 280q2 5 .5 10.5T408-428Zm86-200q-5 3-10.5 1.5T476-633l-40-81q-2-5-.5-11t6.5-8q5-2 11 0t8 7l40 80q2 5 0 10t-7 8Zm24 400q-5 3-11 1t-8-7l-40-80q-2-5 0-11t7-8q5-2 10 0t8 7l41 79q2 5 0 10.5t-7 8.5Zm186 0q-5 3-10.5 1t-7.5-7L546-514q-2-5-.5-10.5t6.5-8.5q5-2 11 0t8 7l140 279q2 5 0 10.5t-7 8.5Zm62-240q-5 3-10.5 1t-8.5-7L627-714q-2-5 0-11t7-8q5-2 10.5 0t7.5 7l120 240q2 5 .5 10.5T766-468Zm120 240q-5 3-10.5 1t-8.5-7l-60-120q-2-5 0-11t7-8q5-2 10.5 0t7.5 7l60 120q2 5 .5 10.5T886-228Z"/>
    </Icon>
  );
});

IconMaterialRainyLightW100Filled.displayName = 'AmauiIconMaterialRainyLightW100Filled';

export default IconMaterialRainyLightW100Filled;
