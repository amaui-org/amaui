import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCardioLoadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardioLoadW100'

      short_name='CardioLoad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m459-195-1-1q-99-88-162-151t-99.5-111Q160-506 146-544t-14-76q0-71 48.5-119.5T300-788q53 0 99.5 28.5T481-676q36-55 81.5-83.5T661-788q71 0 119.5 48.5T829-620q0 38-14 76t-50.5 86Q728-410 665-347T503-196q-4.6 4.95-10.45 6.98-5.85 2.02-11.7 2.02t-11.35-2q-5.5-2-10.5-6ZM192-514h578q17-30 24-55.33 7-25.34 7-50.67 0-60.43-40.5-100.22Q720-760 661-760q-45 0-82.5 23.5T506-662q-5 7-11 11.5t-14 4.5q-8 0-14-4.5T456-662q-35-51-73.21-74.5Q344.58-760 300-760q-59 0-99.5 39.78Q160-680.43 160-620q0 25.33 7.5 50.67Q175-544 192-514Zm104 128h370q28-29 49-53.5t36-46.5H210q16 22 37 46.5t49 53.5Zm185 172q48-42 86.5-77.5T638-358H324q32 31 70.5 66.5T481-214Zm0-300Z"/>
    </Icon>
  );
});

IconMaterialCardioLoadW100.displayName = 'AmauiIconMaterialCardioLoadW100';

export default IconMaterialCardioLoadW100;
