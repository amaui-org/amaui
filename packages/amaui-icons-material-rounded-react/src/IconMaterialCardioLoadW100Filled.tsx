import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCardioLoadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardioLoadW100Filled'

      short_name='CardioLoad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m459-195-1-1q-99-88-162-151t-99.5-111Q160-506 146-544t-14-76q0-71 48.5-119.5T300-788q53 0 99.5 28.5T481-676q36-55 81.5-83.5T661-788q71 0 119.5 48.5T829-620q0 38-14 76t-50.5 86Q728-410 665-347T503-196q-5 5-10.5 7t-11.5 2q-6 0-11.5-2t-10.5-6ZM296-386h370q28-29 49-53.5t36-46.5H210q16 22 37 46.5t49 53.5Zm185 172q48-42 86.5-77.5T638-358H324q32 31 70.5 66.5T481-214Z"/>
    </Icon>
  );
});

IconMaterialCardioLoadW100Filled.displayName = 'AmauiIconMaterialCardioLoadW100Filled';

export default IconMaterialCardioLoadW100Filled;
