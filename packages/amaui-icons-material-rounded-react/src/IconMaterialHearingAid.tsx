import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHearingAid = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HearingAid'

      short_name='HearingAid'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-80q-57 0-100-34t-62-90q-17-50-36.5-74T417-334q-67-48-102-119.5T280-600q0-118 81-199t199-81q106 0 182.5 65.5T836-648q3 17-6.5 30T803-602q-17 3-30-6.5T757-635q-12-72-67-118.5T560-800q-85 0-142.5 57.5T360-600q0 59 28 113.5t79 90.5q48 34 76.5 65.5T589-245q11 35 33.5 60t57.5 25q32 0 56-23.5t24-56.5q0-26-5-51.5T739-338l-32 25q-14 11-32 8t-27-19l-77-136q-61 5-106-36.5T420-600q0-58 41-99t99-41q65 0 106.5 49T698-579l129 112q14 12 13 30.5T825-406l-22 18q20 32 28.5 70.5T840-240q0 66-47 113T680-80ZM200-600q0 62 20.5 119T279-376q11 14 10.5 30.5T277-318q-12 12-28.5 11T221-321q-49-60-75-131.5T120-600q0-78 26-150t75-132q11-13 27.5-13.5T277-884q12 12 12.5 28.5T279-825q-38 48-58.5 105T200-600Zm495 196 42-34-75-66-7.5 7.5Q651-493 647-490l48 86ZM560-540q25 0 42.5-17.5T620-600q0-25-17.5-42.5T560-660q-25 0-42.5 17.5T500-600q0 25 17.5 42.5T560-540Zm132 86ZM560-600Z"/>
    </Icon>
  );
});

IconMaterialHearingAid.displayName = 'AmauiIconMaterialHearingAid';

export default IconMaterialHearingAid;
