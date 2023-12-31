import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonalBagQuestionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonalBagQuestionFilled'

      short_name='PersonalBagQuestion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-192q8 0 13-5t5-13q0-8 6-16t14-16q14-12 22-23t8-31q0-29-19-46.5T720-360q-19 0-35 9.5T659-325q-4 6-1 12.5t10 9.5q6 3 12.5 0t10.5-8q5-7 12.5-11t16.5-4q15 0 23.5 7.5T752-296q0 11-6 18.5T732-262q-6 6-12.5 12T708-236q-3 6-4.5 12t-1.5 14q0 8 5 13t13 5ZM440-756q11-2 20-3t20-1q11 0 20 1t20 3v-4q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v4ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm0-80q11 0 18.5-7.5T746-146q0-11-7.5-18.5T720-172q-11 0-18.5 7.5T694-146q0 11 7.5 18.5T720-120ZM280-80q-33 0-56.5-23.5T200-160v-320q0-85 44.5-152T360-732v-28q0-50 34.5-85t85.5-35q51 0 85.5 35t34.5 85v28q63 29 105 85.5T758-518q-18-2-40-2t-40 3q-27 5-50 12.5T576-480H360q-17 0-28.5 11.5T320-440q0 17 11.5 28.5T360-400h130q-23 35-36.5 73.5T440-241q0 19 3 39t9 42q6 20 16.5 41.5T490-80H280Z"/>
    </Icon>
  );
});

IconMaterialPersonalBagQuestionFilled.displayName = 'AmauiIconMaterialPersonalBagQuestionFilled';

export default IconMaterialPersonalBagQuestionFilled;
