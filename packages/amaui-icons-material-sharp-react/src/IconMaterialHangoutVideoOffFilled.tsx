import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHangoutVideoOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HangoutVideoOffFilled'

      short_name='HangoutVideoOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M820-28 686-160H80v-640h80l24 24v112L28-820l56-56L876-84l-56 56Zm50-176L720-354v-286L560-514v-124H436L274-800h606v560q0 9-2.5 18t-7.5 18ZM240-320h286L240-606v286Z"/>
    </Icon>
  );
});

IconMaterialHangoutVideoOffFilled.displayName = 'AmauiIconMaterialHangoutVideoOffFilled';

export default IconMaterialHangoutVideoOffFilled;
