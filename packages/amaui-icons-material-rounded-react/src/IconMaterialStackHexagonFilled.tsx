import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackHexagonFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackHexagonFilled'

      short_name='StackHexagon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M228-85q-33 5-59.5-15.5T138-154L85-591q-4-33 16-59t53-30l46-6v326q0 66 47 113t113 47h372q-6 24-24 41.5T664-138L228-85Zm132-195q-33 0-56.5-23.5T280-360v-440q0-33 23.5-56.5T360-880h440q33 0 56.5 23.5T880-800v440q0 33-23.5 56.5T800-280H360Zm200-151q9 5 20 5t20-5l100-57q9-5 14.5-14.5T720-523v-114q0-11-5.5-20.5T700-672l-100-57q-9-5-20-5t-20 5l-100 57q-9 5-14.5 14.5T440-637v114q0 11 5.5 20.5T460-488l100 57Z"/>
    </Icon>
  );
});

IconMaterialStackHexagonFilled.displayName = 'AmauiIconMaterialStackHexagonFilled';

export default IconMaterialStackHexagonFilled;
