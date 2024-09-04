import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSearchCheck2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SearchCheck2W100Filled'

      short_name='SearchCheck2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m370-491-70-70q-4-4-9.5-4.5T280-561q-5 5-5 10t5 10l69 69q9 9 21 9t21-9l148-149q4-4 4.5-9.5T539-641q-5-5-10-5t-10 5L370-491Zm40 218q-115 0-196.5-81.5T132-551q0-115 81.5-196.5T410-829q115 0 196 81.5T687-551q0 54-19 101.5T616-365l203 203q4 4 4 9t-4 10q-4 5-10 5t-11-5L596-345q-37 34-84.5 53T410-273Z"/>
    </Icon>
  );
});

IconMaterialSearchCheck2W100Filled.displayName = 'AmauiIconMaterialSearchCheck2W100Filled';

export default IconMaterialSearchCheck2W100Filled;
