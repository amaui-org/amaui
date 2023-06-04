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
      <path d="m692 674 139-139 9 9q5 5 5 11t-5 11L723 683q-5 5-11 5t-11-5l-9-9Zm-561 83q0-14 8-25.5t22-17.5q29-13 56-28t52-35l30 30q5 7 12.5 6.5T326 680q5-5 5.5-13t-4.5-14l-29-29q5-5 10.5-9.5T319 605l28 28q5 7 12.5 6t14.5-8q5-5 5-13t-5-15l-36-36q5-5 9-11t7-13l39 39q5 7 13 7t14-6q5-5 4.5-13t-5.5-15l-51-50 35-63q2-5 5.5-8.5l7.5-7.5 141-124q9-8 21-7.5t20 8.5l190 190-321 322q-8 8-19.5 13t-23.5 5H161q-13 0-21.5-8.5T131 803v-46Zm307 48 310-312-310 312Zm-279 0h279l310-312-171-171-146 128-27 50 36 37q13 15 13.5 34.5T440 605l-94 94q-14 14-33 16t-32-12l-15-15q-25 19-52 32.5T159 746v59Z"/>
    </Icon>
  );
});

IconMaterialPodiatryW100.displayName = 'AmauiIconMaterialPodiatryW100';

export default IconMaterialPodiatryW100;
