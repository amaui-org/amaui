import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBoxAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoxAddFilled'

      short_name='BoxAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v196q-19-7-39-11.5t-41-4.5q-33 0-63.5 7.5T640-488v-152H320v255q0 23 19 34.5t39 1.5l102-51 58 29q-8 21-13 43.5t-5 46.5q0 45 16 86.5t46 74.5H200Zm520-120h-80q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320h80v-80q0-17 11.5-28.5T760-440q17 0 28.5 11.5T800-400v80h80q17 0 28.5 11.5T920-280q0 17-11.5 28.5T880-240h-80v80q0 17-11.5 28.5T760-120q-17 0-28.5-11.5T720-160v-80ZM216-720h528l-34-40H250l-34 40Z"/>
    </Icon>
  );
});

IconMaterialBoxAddFilled.displayName = 'AmauiIconMaterialBoxAddFilled';

export default IconMaterialBoxAddFilled;
