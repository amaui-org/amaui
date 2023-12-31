import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckedBagQuestionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckedBagQuestionFilled'

      short_name='CheckedBagQuestion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-720h120q0-25-17.5-42.5T480-780q-25 0-42.5 17.5T420-720Zm260 203v-203h120v212q-29-8-59.5-11t-60.5 2ZM160-280v-440h120v440H160Zm180 0v-440h20q0-50 35-85t85-35q50 0 85 35t35 85h20v219q-71 27-116.5 86.5T444-280H340Zm362 84h36v-10q0-11 6-19.5t14-16.5q12-11 21-24t9-30q0-27-20-45.5T720-360q-23 0-41.5 13.5T652-310l32 14q3-13 13-21.5t23-8.5q13 0 22.5 8.5T752-296q0 11-6 18.5T732-262q-6 6-12.5 12T708-236q-3 6-4.5 12.5T702-210v14Zm18 76q11 0 18.5-7.5T746-146q0-11-7.5-18.5T720-172q-11 0-18.5 7.5T694-146q0 11 7.5 18.5T720-120Zm0 80q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40ZM80-120v-80h364q4 20 10 40t14 40H80Z"/>
    </Icon>
  );
});

IconMaterialCheckedBagQuestionFilled.displayName = 'AmauiIconMaterialCheckedBagQuestionFilled';

export default IconMaterialCheckedBagQuestionFilled;
