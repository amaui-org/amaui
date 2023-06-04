import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoModeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoModeW100Filled'

      short_name='AutoMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 15.425-1.05-2.375L8.575 12l2.375-1.075L12 8.575l1.075 2.35L15.425 12l-2.35 1.05Zm0 6.275q-2.975 0-5.325-1.575T3 15.675V19.7h-.7v-5.2h5.175v.7h-3.9Q4.7 17.875 6.95 19.438 9.2 21 12 21q3 0 5.375-1.812Q19.75 17.375 20.6 14.5l.7.125q-.875 3.175-3.45 5.125Q15.275 21.7 12 21.7ZM2.35 11q.2-1.525.675-2.675Q3.5 7.175 4.45 5.9l.525.475q-.8 1.05-1.225 2.075-.425 1.025-.7 2.55Zm4.025-6L5.9 4.475q1.175-.9 2.463-1.425Q9.65 2.525 11 2.4v.7q-1.2.125-2.387.612Q7.425 4.2 6.375 5Zm11.2 0q-.875-.75-2.163-1.275Q14.125 3.2 13 3.1v-.7q1.35.125 2.638.662 1.287.538 2.437 1.438Zm3.325 6q-.175-1.425-.662-2.562Q19.75 7.3 18.95 6.4l.5-.5q.925 1.1 1.463 2.387.537 1.288.687 2.713Z"/>
    </Icon>
  );
});

IconMaterialAutoModeW100Filled.displayName = 'AmauiIconMaterialAutoModeW100Filled';

export default IconMaterialAutoModeW100Filled;
