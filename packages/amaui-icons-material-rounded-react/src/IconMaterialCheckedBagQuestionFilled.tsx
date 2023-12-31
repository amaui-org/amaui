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
      <path d="M720-360q-19 0-35 9.5T659-325q-4 6-1 12.5t10 9.5q6 3 12 0t11-8q5-7 12.5-11t16.5-4q15 0 23.5 7.5T752-296q0 11-6 18.5T732-262q-6 6-12.5 12T708-236q-3 6-4.5 12t-1.5 14q0 8 5 13t13 5q8 0 13-5t5-13q0-8 6-16t14-16q14-12 22-23t8-31q0-29-19-46.5T720-360ZM420-720h120q0-25-17.5-42.5T480-780q-25 0-42.5 17.5T420-720Zm260 203v-203h40q33 0 56.5 23.5T800-640v132q-29-8-59.5-11t-60.5 2ZM240-280q-33 0-56.5-23.5T160-360v-280q0-33 23.5-56.5T240-720h40v440h-40Zm100 0v-440h20q0-50 35-85t85-35q50 0 85 35t35 85h20v219q-71 27-116.5 86.5T444-280H340Zm380 160q11 0 18.5-7.5T746-146q0-11-7.5-18.5T720-172q-11 0-18.5 7.5T694-146q0 11 7.5 18.5T720-120Zm0 80q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-600-80q-17 0-28.5-11.5T80-160q0-17 11.5-28.5T120-200h324q4 20 10 40t14 40H120Z"/>
    </Icon>
  );
});

IconMaterialCheckedBagQuestionFilled.displayName = 'AmauiIconMaterialCheckedBagQuestionFilled';

export default IconMaterialCheckedBagQuestionFilled;
