import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCongenitalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CongenitalW100Filled'

      short_name='Congenital'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M401 805q-85 0-156.5-43T133 644l-22-41q-7-14-5-29.5t12-27.5l176-214q7-8 16-13.5t19-7.5q10-2 20-.5t20 6.5l111 60 98-54q9-5 19.5-4t18.5 9q8 8 10 17.5t-3 19.5L512 625q-8 17-24 25t-34 4l-318-67 21 40q35 69 100.5 109T401 776h162q54 0 103.5-20t87.5-58l37-37h-72q-28 0-45.5-21T660 592l22-149q2-10 8.5-17t15.5-10q9-3 17.5-.5T739 426l104 121q10 11 12 25.5t-5 28.5l-14 29q-37 81-111 128t-162 47H401Z"/>
    </Icon>
  );
});

IconMaterialCongenitalW100Filled.displayName = 'AmauiIconMaterialCongenitalW100Filled';

export default IconMaterialCongenitalW100Filled;
