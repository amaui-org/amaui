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
      <path d="M320-600h320q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680H320q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 480q-17 0-28.5-11.5T400-160v-120h120q17 0 28.5-11.5T560-320q0-17-11.5-28.5T520-360H400v-80h240q17 0 28.5-11.5T680-480q0-17-11.5-28.5T640-520H393v1q-13-35-43.5-58T280-600H160q-17 0-28.5-11.5T120-640v-120q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H440ZM120-80q-17 0-28.5-11.5T80-120q0-17 11.5-28.5T120-160h62q-48-23-77.5-68T75-330q0-79 55.5-134.5T265-520q17 0 28.5 11.5T305-480q0 17-11.5 28.5T265-440q-45 0-77.5 32T155-330q0 39 24 69t61 38v-57q0-17 11.5-28.5T280-320q17 0 28.5 11.5T320-280v160q0 17-11.5 28.5T280-80H120Z"/>
    </Icon>
  );
});

IconMaterialConvertToTextFilled.displayName = 'AmauiIconMaterialConvertToTextFilled';

export default IconMaterialConvertToTextFilled;
