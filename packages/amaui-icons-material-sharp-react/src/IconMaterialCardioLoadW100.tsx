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
      <path d="m481-176-23-20q-99-88-162-151t-99.5-111Q160-506 146-544t-14-76q0-71 48.5-119.5T300-788q53 0 99.5 28.5T481-676q36-55 81.5-83.5T661-788q71 0 119.5 48.5T829-620q0 38-14 76t-50.5 86Q728-410 665-347T503-196l-22 20ZM192-514h578q17-30 24-55.5t7-50.5q0-60-40.5-100T661-760q-48 0-88 27t-78 87h-29q-38-60-78-87t-88-27q-59 0-99.5 40T160-620q0 25 7.5 50.5T192-514Zm104 128h370q28-29 49-53.5t36-46.5H210q16 22 37 46.5t49 53.5Zm185 172q48-42 86.5-77.5T638-358H324q32 31 70.5 66.5T481-214Zm0-300Z"/>
    </Icon>
  );
});

IconMaterialCardioLoadW100.displayName = 'AmauiIconMaterialCardioLoadW100';

export default IconMaterialCardioLoadW100;
