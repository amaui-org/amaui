import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStat3W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stat3W100Filled'

      short_name='Stat3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-324 306-150q-4 4-9.5 4.5T286-150q-5-5-5-10t5-10l173-173q9-9 21-9t21 9l173 173q4 4 4.5 9.5T674-150q-5 5-10 5t-10-5L480-324Zm0-240L306-390q-4 4-9.5 4.5T286-390q-5-5-5-10t5-10l173-173q9-9 21-9t21 9l173 173q4 4 4.5 9.5T674-390q-5 5-10 5t-10-5L480-564Zm0-240L306-630q-4 4-9.5 4.5T286-630q-5-5-5-10t5-10l173-173q9-9 21-9t21 9l183 183-20 20-184-184Z"/>
    </Icon>
  );
});

IconMaterialStat3W100Filled.displayName = 'AmauiIconMaterialStat3W100Filled';

export default IconMaterialStat3W100Filled;
