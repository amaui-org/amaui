import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConvertToTextFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConvertToTextFilled'

      short_name='ConvertToText'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-80h102q-48-23-77.5-68T75-330q0-79 55.5-134.5T265-520v80q-45 0-77.5 32T155-330q0 39 24 69t61 38v-97h80v240H80Zm200-520h400v-80H280v80Zm120 480v-160h160v-80H400v-80h280v-80H400v-80H120v-240h720v720H400Z"/>
    </Icon>
  );
});

IconMaterialConvertToTextFilled.displayName = 'AmauiIconMaterialConvertToTextFilled';

export default IconMaterialConvertToTextFilled;
