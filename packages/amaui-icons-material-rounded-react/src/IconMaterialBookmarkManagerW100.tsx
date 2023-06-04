import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkManagerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkManagerW100'

      short_name='BookmarkManager'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M192 844q-26 0-43-17t-17-43V408q0-26 17-43t43-17h223q12 0 23.5 5t19.5 13l22 22h288q26 0 43 17t17 43v68q0 6-4 10t-10 4q-6 0-10-4t-4-10v-68q0-12-10-22t-22-10H160v368q0 12 10 22t22 10h277q6 0 10 4t4 10q0 6-4 10t-10 4H192Zm553-163 20 19-154 154v42h42l154-154 20 20-144 144q-8 8-19.5 13t-23.5 5h-27q-13 0-21.5-8.5T583 894v-26q0-12 5-23.5t13-19.5l144-144Zm82 81-82-81 43-43q9-8 21.5-8t20.5 8l40 40q8 8 8 20.5t-8 21.5l-43 42ZM160 416v400-400Z"/>
    </Icon>
  );
});

IconMaterialBookmarkManagerW100.displayName = 'AmauiIconMaterialBookmarkManagerW100';

export default IconMaterialBookmarkManagerW100;
