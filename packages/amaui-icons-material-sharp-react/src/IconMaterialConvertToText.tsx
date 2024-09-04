import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConvertToText = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConvertToText'

      short_name='ConvertToText'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-80h102q-48-23-77.5-68T75-330q0-79 55.5-134.5T265-520v80q-45 0-77.5 32T155-330q0 39 24 69t61 38v-97h80v240H80Zm400-400Zm-80 360v-80h360v-560H200v160h-80v-240h720v720H400Zm0-160h160v-80H400v80Zm0-160h280v-80H400v80ZM280-600h400v-80H280v80Z"/>
    </Icon>
  );
});

IconMaterialConvertToText.displayName = 'AmauiIconMaterialConvertToText';

export default IconMaterialConvertToText;
