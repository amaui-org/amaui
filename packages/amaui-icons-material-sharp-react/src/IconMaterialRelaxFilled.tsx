import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRelaxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RelaxFilled'

      short_name='Relax'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 974 148 641q-14-14-25.5-30.5T103 576h372q17 0 28.5 11.5T515 616q0 17-11.5 28.5T475 656q-14 0-25-7.5T436 627l-77 21q11 39 43 63.5t73 24.5q50 0 85-35t35-85q0-11-2-20.5t-5-19.5h47q50 0 85-35t35-85q0-50-35-85t-85-35q-41 0-73 24.5T519 424l77 21q3-14 14-21.5t25-7.5q17 0 28.5 11.5T675 456q0 17-11.5 28.5T635 496H82q-1-8-1.5-14.5T80 467q0-103 67-177t167-74q48 0 90.5 19t75.5 53q32-34 74.5-53t90.5-19q100 0 167.5 74T880 466q0 49-17 94t-51 80L480 974Z"/>
    </Icon>
  );
});

IconMaterialRelaxFilled.displayName = 'AmauiIconMaterialRelaxFilled';

export default IconMaterialRelaxFilled;
