import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWrist = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wrist'

      short_name='Wrist'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 972 244 776H40v-80h236l138 137-59-117h485v80H485l45 89-90 87ZM40 456v-80h184l78-80h498v80H337l-81 80H40Zm520 200v-80h360v80H560Zm0-140v-80h320v80H560ZM40 604Z"/>
    </Icon>
  );
});

IconMaterialWrist.displayName = 'AmauiIconMaterialWrist';

export default IconMaterialWrist;
