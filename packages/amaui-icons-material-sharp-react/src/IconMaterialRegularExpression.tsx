import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRegularExpression = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RegularExpression'

      short_name='RegularExpression'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M197 857q-56-57-86.5-130T80 574q0-80 30-153t87-130l57 57q-46 45-70 103.5T160 574q0 64 24.5 122.5T254 800l-57 57Zm183-41q-25 0-42.5-17.5T320 756q0-25 17.5-42.5T380 696q25 0 42.5 17.5T440 756q0 25-17.5 42.5T380 816Zm139-200v-71l-61 36-40-70 61-35-61-35 40-70 61 36v-71h80v71l61-36 40 70-61 35 61 35-40 70-61-36v71h-80Zm244 241-57-57q46-45 70-103.5T800 574q0-64-24.5-122.5T706 348l57-57q56 57 86.5 130T880 574q0 80-30 153t-87 130Z"/>
    </Icon>
  );
});

IconMaterialRegularExpression.displayName = 'AmauiIconMaterialRegularExpression';

export default IconMaterialRegularExpression;
