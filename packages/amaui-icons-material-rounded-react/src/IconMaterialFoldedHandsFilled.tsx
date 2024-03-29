import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFoldedHandsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoldedHandsFilled'

      short_name='FoldedHands'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M630-320v-112l-76-139q-20 10-32 29t-12 42v299q0 11 2.5 20.5T520-162l47 82h313l-38-474q-1-13-6-24.5T823-600L591-865q-12-14-31-13t-32 16q-16 27-16 58t15 59l163 297v128h-60Zm-360 0v-128l163-297q15-28 14-59t-17-59q-12-14-30.5-14.5T369-864L137-600q-8 10-13 21.5t-6 24.5L80-80h313l47-82q5-9 7.5-18.5T450-201v-299q0-23-12-41.5T406-571l-76 139v112h-60Z"/>
    </Icon>
  );
});

IconMaterialFoldedHandsFilled.displayName = 'AmauiIconMaterialFoldedHandsFilled';

export default IconMaterialFoldedHandsFilled;
