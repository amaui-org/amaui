import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOphthalmologyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OphthalmologyFilled'

      short_name='Ophthalmology'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M400 216q12-12 28.5-12t28.5 12l21 21q12 12 15.5 28.5T492 298q-5 17-18 28t-30 13q-69 11-121.5 56.5T250 508q-4 13-14 20.5t-24 7.5h-52q-17 0-28.5-11.5T120 496q0-17 11.5-28.5T160 456h23q29-69 84.5-119T395 267q-8-12-7-26t12-25Zm200 360q0-44 16.5-84t53.5-62q-17-23-38.5-40.5T585 360q-15-8-22.5-22t-2.5-30q5-16 20-24t30-1q48 22 86 58.5t64 84.5q42 20 61 61.5t19 88.5q0 47-19 88.5T760 726q-25 47-63 83.5T611 868q-16 7-31 0t-20-24q-5-16 3-30.5t23-22.5q25-12 46-29.5t38-39.5q-37-22-53.5-62T600 576ZM395 941q-11-11-11-28t11-29q-72-20-128-69.5T183 696h-23q-17 0-28.5-11.5T120 656q0-17 11.5-28.5T160 616h52q14 0 24 7.5t14 20.5q20 67 72.5 112.5T444 813q17 2 30 13.5t18 27.5q5 16 1.5 32T478 914l-27 27q-12 12-28 12t-28-12Z"/>
    </Icon>
  );
});

IconMaterialOphthalmologyFilled.displayName = 'AmauiIconMaterialOphthalmologyFilled';

export default IconMaterialOphthalmologyFilled;
