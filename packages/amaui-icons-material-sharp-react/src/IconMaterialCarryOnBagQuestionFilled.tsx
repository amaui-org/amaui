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
      <path d="M720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-300-80v-560h140v-120h-80v-80h160v372q-89 29-144.5 102T440-240q0 32 7 61.5t21 58.5h-48Zm-180 0v-560h120v560H240Zm480 0q11 0 18.5-7.5T746-146q0-11-7.5-18.5T720-172q-11 0-18.5 7.5T694-146q0 11 7.5 18.5T720-120Zm-18-76h36v-10q0-11 6-19.5t14-16.5q14-12 22-23t8-31q0-29-19-46.5T720-360q-23 0-41.5 13.5T652-310l32 14q3-12 12.5-21t23.5-9q15 0 23.5 7.5T752-296q0 11-6 18.5T732-262q-6 6-12.5 12T708-236q-3 6-4.5 12t-1.5 14v14Z"/>
    </Icon>
  );
});

IconMaterialCarryOnBagQuestionFilled.displayName = 'AmauiIconMaterialCarryOnBagQuestionFilled';

export default IconMaterialCarryOnBagQuestionFilled;
