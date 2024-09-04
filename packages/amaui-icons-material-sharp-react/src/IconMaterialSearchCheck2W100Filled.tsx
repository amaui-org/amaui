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
      <path d="m370-451 179-180-20-20-159 160-80-80-20 20 100 100Zm40 178q-115 0-196.5-81.5T132-551q0-115 81.5-196.5T410-829q115 0 196 81.5T687-551q0 54-19 101.5T616-365l212 212-19 21-213-213q-37 34-84.5 53T410-273Z"/>
    </Icon>
  );
});

IconMaterialSearchCheck2W100Filled.displayName = 'AmauiIconMaterialSearchCheck2W100Filled';

export default IconMaterialSearchCheck2W100Filled;
