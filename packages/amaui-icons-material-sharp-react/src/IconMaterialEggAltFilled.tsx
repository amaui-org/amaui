import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEggAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EggAltFilled'

      short_name='EggAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 22q-1.675 0-2.537-.562Q12.6 20.875 12 20.25q-.475-.5-.912-.875Q10.65 19 9.975 19q-1.125 0-2.5-.387-1.375-.388-2.587-1.276-1.213-.887-2.038-2.312-.825-1.425-.85-3.5-.05-4.175 2.062-6.85Q6.175 2 9.975 2q1.775 0 3 .512 1.225.513 2.113 1.288.887.775 1.499 1.712.613.938 1.163 1.813.3.5.6.912.3.413.65.763 1.5 1.5 2.25 2.625t.75 3.4q0 3-1.862 4.987Q18.275 22 16 22Zm-4-6.5q1.45 0 2.475-1.025Q15.5 13.45 15.5 12q0-1.45-1.025-2.475Q13.45 8.5 12 8.5q-1.45 0-2.475 1.025Q8.5 10.55 8.5 12q0 1.45 1.025 2.475Q10.55 15.5 12 15.5Z"/>
    </Icon>
  );
});

IconMaterialEggAltFilled.displayName = 'AmauiIconMaterialEggAltFilled';

export default IconMaterialEggAltFilled;
