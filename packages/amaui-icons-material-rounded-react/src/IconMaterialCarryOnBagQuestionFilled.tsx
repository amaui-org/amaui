import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarryOnBagQuestionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarryOnBagQuestionFilled'

      short_name='CarryOnBagQuestion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-300-80v-560h140v-120h-40q-17 0-28.5-11.5T480-840q0-17 11.5-28.5T520-880h80q17 0 28.5 11.5T640-840v332q-89 29-144.5 102T440-240q0 32 7 61.5t21 58.5h-48Zm-100 0q-33 0-56.5-23.5T240-200v-400q0-33 23.5-56.5T320-680h40v560h-40Zm400 0q11 0 18.5-7.5T746-146q0-11-7.5-18.5T720-172q-11 0-18.5 7.5T694-146q0 11 7.5 18.5T720-120Zm68-176q0-29-19-46.5T720-360q-19 0-35 9.5T659-325q-4 6-1 12.5t10 9.5q6 3 12 0t11-8q5-7 12.5-11t16.5-4q15 0 23.5 7.5T752-296q0 11-6 18.5T732-262q-6 6-12.5 12T708-236q-3 6-4.5 12t-1.5 14q0 8 5 13t13 5q8 0 13-5t5-13q0-8 6-16t14-16q14-12 22-23t8-31Z"/>
    </Icon>
  );
});

IconMaterialCarryOnBagQuestionFilled.displayName = 'AmauiIconMaterialCarryOnBagQuestionFilled';

export default IconMaterialCarryOnBagQuestionFilled;
