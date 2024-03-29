import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsScoreFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsScoreFilled'

      short_name='SportsScore'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 6h2V4H9Zm4 0V4h2v2Zm-4 8v-2h2v2Zm8-4V8h2v2Zm0 4v-2h2v2Zm-4 0v-2h2v2Zm4-8V4h2v2Zm-6 2V6h2v2ZM6 20q-.425 0-.713-.288Q5 19.425 5 19V5q0-.425.287-.713Q5.575 4 6 4t.713.287Q7 4.575 7 5v1h2v2H7v2h2v2H7v7q0 .425-.287.712Q6.425 20 6 20Zm9-8v-2h2v2Zm-4 0v-2h2v2Zm-2-2V8h2v2Zm4 0V8h2v2Zm2-2V6h2v2Z"/>
    </Icon>
  );
});

IconMaterialSportsScoreFilled.displayName = 'AmauiIconMaterialSportsScoreFilled';

export default IconMaterialSportsScoreFilled;
