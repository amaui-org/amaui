import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStat1W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stat1W100'

      short_name='Stat1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-564 306-390q-4 4-9.5 4.5T286-390q-5-5-5-10t5-10l173-173q9-9 21-9t21 9l173 173q4 4 4.5 9.5T674-390q-5 5-10 5t-10-5L480-564Z"/>
    </Icon>
  );
});

IconMaterialStat1W100.displayName = 'AmauiIconMaterialStat1W100';

export default IconMaterialStat1W100;
