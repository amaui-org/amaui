import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnknownMedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnknownMedFilled'

      short_name='UnknownMed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.5 13q-.625 0-1.062-.438Q2 12.125 2 11.5t.438-1.062Q2.875 10 3.5 10h6q.625 0 1.062.438.438.437.438 1.062t-.438 1.062Q10.125 13 9.5 13Zm11 0q-.625 0-1.062-.438Q13 12.125 13 11.5t.438-1.062Q13.875 10 14.5 10h6q.625 0 1.062.438.438.437.438 1.062t-.438 1.062Q21.125 13 20.5 13Z"/>
    </Icon>
  );
});

IconMaterialUnknownMedFilled.displayName = 'AmauiIconMaterialUnknownMedFilled';

export default IconMaterialUnknownMedFilled;
