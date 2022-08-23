import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGppBadSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GppBadSharpFilled'
      short_name='GppBad'

      {...props}
    >
      <path d="M9.9 15.5 12 13.4 14.1 15.5 15.5 14.1 13.4 12 15.5 9.9 14.1 8.5 12 10.6 9.9 8.5 8.5 9.9 10.6 12 8.5 14.1ZM12 22Q8.525 21.125 6.263 18.012Q4 14.9 4 11.1V5L12 2L20 5V11.1Q20 14.9 17.738 18.012Q15.475 21.125 12 22Z"/>
    </Icon>
  );
});

IconMaterialGppBadSharpFilled.displayName = 'AmauiIconMaterialGppBadSharpFilled';

export default IconMaterialGppBadSharpFilled;
