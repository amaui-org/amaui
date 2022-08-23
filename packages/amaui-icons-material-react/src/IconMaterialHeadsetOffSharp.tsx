import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHeadsetOffSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadsetOffSharp'
      short_name='HeadsetOff'

      {...props}
    >
      <path d="M21.1 18.15 19.1 16.15V14H17.1V14.15L15.1 12.15V12H19.1V11Q19.1 8.05 17.05 6.025Q15 4 12.1 4Q11 4 10.012 4.312Q9.025 4.625 8.2 5.2L6.75 3.8Q7.875 2.925 9.238 2.462Q10.6 2 12.1 2Q13.95 2 15.588 2.7Q17.225 3.4 18.45 4.625Q19.675 5.85 20.388 7.487Q21.1 9.125 21.1 11ZM20.5 23.4 20.1 23H12.1V21H18.1L17.1 20H15.1V18L5.575 8.475Q5.35 9.075 5.225 9.7Q5.1 10.325 5.1 11V12H9.1V20H3.1V11Q3.1 9.875 3.338 8.887Q3.575 7.9 4.075 6.95L0.7 3.575L2.125 2.175L21.9 21.975ZM5.1 18H7.1V14H5.1ZM5.1 18H7.1ZM19.1 16.15Z"/>
    </Icon>
  );
});

IconMaterialHeadsetOffSharp.displayName = 'AmauiIconMaterialHeadsetOffSharp';

export default IconMaterialHeadsetOffSharp;
