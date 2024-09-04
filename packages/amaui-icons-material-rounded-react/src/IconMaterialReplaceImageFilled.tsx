import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReplaceImageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplaceImageFilled'

      short_name='ReplaceImage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m463-234-23-31q-6-8-16-8t-16 8l-24 33q-8 10-2 21t18 11h159q13 0 18.5-11t-2.5-21l-39-51q-6-8-15.5-8.5T505-284l-42 50ZM320-80q-33 0-56.5-23.5T240-160v-320q0-33 23.5-56.5T320-560h320q33 0 56.5 23.5T720-480v320q0 33-23.5 56.5T640-80H320Zm480-560H640q-17 0-28.5-11.5T600-680q0-17 11.5-28.5T640-720h36q-39-39-90-59.5T480-800q-71 0-133 33.5T247-675q-14 20-30 23t-30-4q-14-7-19.5-21t2.5-27q48-81 130.5-128.5T480-880q82 0 155.5 35T760-746v-94q0-17 11.5-28.5T800-880q17 0 28.5 11.5T840-840v160q0 17-11.5 28.5T800-640Z"/>
    </Icon>
  );
});

IconMaterialReplaceImageFilled.displayName = 'AmauiIconMaterialReplaceImageFilled';

export default IconMaterialReplaceImageFilled;
