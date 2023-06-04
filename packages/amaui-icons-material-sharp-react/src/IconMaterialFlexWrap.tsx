import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlexWrap = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlexWrap'

      short_name='FlexWrap'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M40 976V616h240v360H40Zm320 0V616h240v360H360Zm320 0V616h240v360H680Zm-240-80h80V696h-80v200ZM40 536V176h240v360H40Zm320 0V176h240v360H360Zm320 0V176h240v360H680Zm-560-80h80V256h-80v200Zm640 0h80V256h-80v200Z"/>
    </Icon>
  );
});

IconMaterialFlexWrap.displayName = 'AmauiIconMaterialFlexWrap';

export default IconMaterialFlexWrap;
