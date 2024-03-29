import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOphthalmology = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Ophthalmology'

      short_name='Ophthalmology'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 536v-80h63q29-69 84.5-118.5T395 268l-23-24 56-56 50 49q12 12 15.5 28.5T492 298q-5 17-18 28t-30 13q-69 11-121.5 56.5T250 508l-8 28H120Zm480 40q0-44 16.5-84t53.5-62q-23-30-53.5-51.5T549 346l23-77q62 18 110 59t78 98q42 20 61 61.5t19 88.5q0 47-19 89t-61 61q-30 57-79 98t-110 59l-23-77q36-11 67.5-32.5T670 722q-37-22-53.5-62T600 576Zm120 80q15 0 27.5-24.5T760 576q0-31-12.5-55.5T720 496q-15 0-27.5 24.5T680 576q0 31 12.5 55.5T720 656ZM423 969l-56-57 28-28q-72-20-128-69.5T183 696h-63v-80h122l8 28q20 67 72.5 112.5T444 813q17 2 30 13.5t18 27.5q5 16 1.5 32T478 914l-55 55Zm297-393Z"/>
    </Icon>
  );
});

IconMaterialOphthalmology.displayName = 'AmauiIconMaterialOphthalmology';

export default IconMaterialOphthalmology;
