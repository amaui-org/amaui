import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPregnantWomanSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PregnantWomanSharpFilled'
      short_name='PregnantWoman'

      {...props}
    >
      <path d="M11 6Q10.175 6 9.588 5.412Q9 4.825 9 4Q9 3.175 9.588 2.587Q10.175 2 11 2Q11.825 2 12.413 2.587Q13 3.175 13 4Q13 4.825 12.413 5.412Q11.825 6 11 6ZM10 22V17H8V10Q8 8.75 8.875 7.875Q9.75 7 11 7Q12.25 7 13.125 7.875Q14 8.75 14 10Q14.9 10.375 15.45 11.2Q16 12.025 16 13V17H13V22Z"/>
    </Icon>
  );
});

IconMaterialPregnantWomanSharpFilled.displayName = 'AmauiIconMaterialPregnantWomanSharpFilled';

export default IconMaterialPregnantWomanSharpFilled;
