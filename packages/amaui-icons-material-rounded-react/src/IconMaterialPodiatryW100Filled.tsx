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
      <path d="m692 674 139-139 9 9q5 5 5 11t-5 11L723 683q-5 5-11 5t-11-5l-9-9Zm-561 83q0-14 8-25.5t22-17.5q29-13 56-28t52-35l30 30q5 7 12.5 6.5T326 680q5-5 5.5-13t-4.5-14l-29-29q5-5 10.5-9.5T319 605l28 28q5 7 12.5 6t14.5-8q5-5 5-13t-5-15l-36-36q5-5 9-11t7-13l39 39q5 7 13 7t14-6q5-5 4.5-13t-5.5-15l-51-50 35-63q2-5 5.5-8.5l7.5-7.5 120-106q18-16 41.5-15t40.5 18l170 170-321 322q-8 8-19.5 13t-23.5 5H191q-25 0-42.5-17.5T131 773v-16Z"/>
    </Icon>
  );
});

IconMaterialPodiatryW100Filled.displayName = 'AmauiIconMaterialPodiatryW100Filled';

export default IconMaterialPodiatryW100Filled;
